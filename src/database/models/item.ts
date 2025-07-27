import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize} from 'sequelize';

export class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item, { omit: 'id' }>> {
    declare id: CreationOptional<number>;
    declare nama_item: string;
    declare uom: string;
    declare harga_beli: number;
    declare harga_jual: number;

    static associate(models: {}) {
    }

    public getItemData() {
        return this.toJSON()
    }
}

export default (sequelize: Sequelize): typeof Item => {
    Item.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            nama_item: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            uom: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            harga_beli: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            harga_jual: {
                type: DataTypes.FLOAT,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'Item',
            tableName: 'items',
            timestamps: true,
        }
    )
    return Item;
}
