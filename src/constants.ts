import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: process.env.NODE_ENV === 'production' ? '/root/.config/wireguard-manager/db.sqlite' : `./.config/db.sqlite`,
	logging: process.env.NODE_ENV === 'development' ? console.log : false
});
