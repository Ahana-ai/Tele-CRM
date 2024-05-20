import User from './User';
import Role from './Role';
import Interaction from './Interaction';
import Customer from './Customer';
import Task from './Task';
import Campaign from './Campaign';
import Product from './Product';
import Opportunity from './Opportunity';
import LeaderCaller from './LeaderCaller';

// User-Role Relationship
User.belongsTo(Role, { foreignKey: 'role' });
Role.hasMany(User, { foreignKey: 'role' });

// Interaction Relationships
Interaction.belongsTo(Customer, { foreignKey: 'customerId' });
Interaction.belongsTo(User, { foreignKey: 'userId' });

// Task Relationship
Task.belongsTo(User, { foreignKey: 'assignedTo' });

// Opportunity Relationship
Opportunity.belongsTo(Customer, { foreignKey: 'customerId' });

// Customer Relationship
Customer.belongsTo(User, { foreignKey: 'assistant' });

// LeaderCaller Relationship
LeaderCaller.belongsTo(User, { foreignKey: 'leaderId' });
LeaderCaller.belongsTo(User, { foreignKey: 'callerId' });

export {
    User,
    Role,
    Interaction,
    Customer,
    Task,
    Campaign,
    Product,
    Opportunity,
    LeaderCaller
};
