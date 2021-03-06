import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1621045516930 implements MigrationInterface {
    name = 'CreateTables1621045516930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `company` varchar(255) NULL, `phone` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `occupation` varchar(255) NULL, `standardScrap` varchar(255) NULL, `status` varchar(255) NULL, `deletedAt` datetime(6) NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `messages` (`id` varchar(36) NOT NULL, `message` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `talks` (`id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `talks`");
        await queryRunner.query("DROP TABLE `messages`");
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
