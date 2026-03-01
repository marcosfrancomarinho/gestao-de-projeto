import cors from 'cors';
import express from 'express';
import { ProductFinderUseCase } from './app/usecase/product.finder.usecase.js';
import { ProductSaverUseCase } from './app/usecase/product.saver.usecase.js';
import { UuidIdGenerator } from './infra/id_generator/uuid.id.generator.js';
import { PrismaProductFinder } from './infra/repository/prisma.product.finder.js';
import { PrismaProdctSaver } from './infra/repository/prisma.product.saver.js';
import { ProductSaverController } from './presentation/controller/prodcut.saver.controller.js';
import { ProductFinderController } from './presentation/controller/product.finder.controller.js';
import { Routers } from './presentation/routers/routers.js';

function main(): void {
  const app = express();
  const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  app.use(express.json(), cors());

  const routers = new Routers(
    new ProductFinderController(new ProductFinderUseCase(new PrismaProductFinder())),
    new ProductSaverController(new ProductSaverUseCase(new PrismaProdctSaver(), new UuidIdGenerator())),
  );

  routers.setup(app);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
