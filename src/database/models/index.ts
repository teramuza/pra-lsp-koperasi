import {Sequelize} from 'sequelize';
import sequelizeConfig from '../../config/sequelize.config';
import Customer from "./customer";
import Petugas from "@model/petugas";
import Item from './item';
import Sales from './sales';
import Transaction from './transaction';

const sequelize = sequelizeConfig.use_env_variable
    ? new Sequelize(
        process.env[sequelizeConfig.use_env_variable] as string,
        sequelizeConfig,
    )
    : new Sequelize(
        sequelizeConfig.database as string,
        sequelizeConfig.username as string,
        sequelizeConfig.password as string,
        sequelizeConfig,
    );

const models = {
    Customer: Customer(sequelize),
    Petugas: Petugas(sequelize),
    Item: Item(sequelize),
    Transaction: Transaction(sequelize),
    Sales: Sales(sequelize),
};

Object.values(models).forEach((model) => {
    if ('associate' in model) {
        model.associate(models);
    }
});

export {sequelize};
export default models;
