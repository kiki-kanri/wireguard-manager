import { sequelize } from '@/constants';
import '@/models';

(async () => {
	if (process.getuid?.() !== 0) {
		console.error('This program must be run as root.');
		process.exit(1);
	}

	await sequelize.sync();
})();
