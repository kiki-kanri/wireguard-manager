import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { sequelize } from '@/constants';
import { ServerModel } from './server';

@Table({ modelName: 'Client', tableName: 'client.clients' })
export class ClientModel extends Model {
	declare createdAt: Date;

	@Column({ allowNull: false, type: DataType.STRING })
	declare endpoint: string;
	declare id: number;

	@Column({
		allowNull: false,
		type: DataType.STRING(15),
		unique: true,
		validate: { isIPv4: true }
	})
	declare ip: string;

	@Column({
		allowNull: false,
		type: DataType.STRING(16),
		unique: true
	})
	declare name: string;

	@Column({ type: DataType.TEXT })
	declare postDown: Nullable<string>;

	@Column({ type: DataType.TEXT })
	declare postUp: Nullable<string>;

	@Column({
		allowNull: false,
		type: DataType.CHAR(44),
		unique: true
	})
	declare privateKey: string;

	@Column({
		allowNull: false,
		type: DataType.CHAR(44),
		unique: true
	})
	declare publicKey: string;

	@BelongsTo(() => ServerModel)
	declare server: ServerModel;

	@Column({ allowNull: false })
	@ForeignKey(() => ServerModel)
	declare serverId: number;
	declare updatedAt: Date;
}

sequelize.addModels([ClientModel]);
