import Users from '../models/User'; // Assuming the User model is in the same directory
import logger from '../config/Logger';
import { loggerStatus, OPERATIONS } from '../config/LoggerObject';

// Controller function to create a new user
const createUser = async (req, res) => {
    const { name, email, phone, address, photo, role, status, password } = req.body;

    if (!name || !email || !phone || !address || !photo || !role || !status) {
        logger.logActivity(loggerStatus.ERROR, req.body, 'name, email, phone, address, photo, role, status are required!', null, OPERATIONS.USERS.CREATE);
        res.status(400).json({ message: 'name, email, phone, address, photo, role, status is required!' });
        return;
    }
    
    if(phone.length != 10) {
        logger.logActivity(loggerStatus.ERROR, req.body, 'A phone no should have 10 digits.!!', null, OPERATIONS.USERS.CREATE);
        res.status(400).json({ message: 'A phone no should have 10 digits.!!' });
        return;
    }

    // Validate duplicate email ids 
    try {
        const alreadyExistsUser = await Users.findOne({ where: { email : email } }).catch((err) => {
            logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to fetch data from DB', err, OPERATIONS.USERS.CREATE);
        });

        if (alreadyExistsUser) {
            logger.logActivity(loggerStatus.ERROR, req.body, 'User with email already exists!', null, OPERATIONS.USERS.CREATE);
            res.status(409).json({ message: 'User with email already exists!' });
            return;
        }    
    } catch (error) {
        logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to execute db query to select', error, OPERATIONS.USERS.CREATE);
    }

     // Validate duplicate phone numbers 
     try {
        const alreadyExistsPhoneno = await Users.findOne({ where: { phone : phone } }).catch((err) => {
            logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to fetch data from DB', err, OPERATIONS.USERS.CREATE);
        });

        if (alreadyExistsPhoneno) {
            logger.logActivity(loggerStatus.ERROR, req.body, 'User with phone no already exists!', null, OPERATIONS.USERS.CREATE);
            res.status(409).json({ message: 'User with phone no already exists!' });
            return;
        }    
    } catch (error) {
        logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to execute db query to select', error, OPERATIONS.USERS.CREATE);
    }   
    

    try {
        const salt = genSaltSync(10);
        const newUser = new Users({  
            name : name, 
            email: email, 
            password :  hashSync(password, salt),
            phone : phone,
            photo: photo,
            address: address,
            // role: (req.body.isAdmin !== undefined && req.body.isAdmin == true) ? 1 : 2 
            role: role,
            status: status,

         });
        const savedUser = await newUser.create().catch((err) => {
            logger.logActivity(loggerStatus.ERROR, req.body, 'Cannot register user at the moment!', err, OPERATIONS.USERS.CREATE);
            res.status(500).json({ error: 'Cannot register user at the moment!' });
        });
    
        if (savedUser) {
            logger.logActivity(loggerStatus.INFO, req.body, 'Registration Successful!!', null, OPERATIONS.USERS.CREATE);
            const userDetails = {
                id : savedUser.id,
                name : savedUser.name, 
                email: savedUser.email, 
                phone: savedUser.phone,
                photo : savedUser.photo,
                address: savedUser.address,
                role: savedUser.role,
                status: savedUser.status,
            }
            res.json({ 
                message: 'Registration Successful!!',
                data: userDetails
            });
        }
    } catch (error) {
        logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to execute db query to create', error, OPERATIONS.USERS.CREATE);
    }
};

// Controller function to get all users
const getUsers = async (req, res) => {
    try {
        const allExistingsUser = await Users.findAll({ attributes: ['name', 'email', 'phone', 'address','photo', 'status', 'role','status'] }).catch((err) => {
            logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to fetch all users', err, OPERATIONS.USERS.RETRIEVE);
        });

        if (allExistingsUser.length > 0) {
            logger.logActivity(loggerStatus.INFO, req.body, 'All Users are retrieved!!', null, OPERATIONS.USERS.RETRIEVE);
            res.status(200).json({ 
                message: 'All Users are retrieved!!',
                data: allExistingsUser
            });
        }  else {
            logger.logActivity(loggerStatus.INFO, req.body, 'No user found!!', null, OPERATIONS.USERS.CREATE);
            res.status(400).json({ message: 'No user found!!' });
        }

    } catch (error) {
        logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to execute db query to select', error, OPERATIONS.USERS.CREATE);
    }  
};

// Controller function to get a single user by ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update a user by ID
const updateUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const [updated] = await Users.update(req.body, {
      where: { id: userId }
    });
    if (!updated) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUser = await User.findByPk(userId);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deleted = await Users.destroy({
      where: { id: userId }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createUser, getUsers, getUserById, updateUser, deleteUser };