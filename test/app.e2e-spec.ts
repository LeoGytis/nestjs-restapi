import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AuthDto } from 'src/auth/dto';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
// Check auto imports has to begni with '../'

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    pactum.request.setBaseUrl('http://localhost:3333');
    await prisma.cleanDb();
  });

  afterAll(async () => {
    await app.close();
  });
  it.todo('should pass test');

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'gytisn@gmail.com',
      password: '123',
    };

    describe('Sign UP', () => {
      it('should signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });
    describe('Sign IN', () => {
      // it('should signin', () => {
      //   return pactum
      //     .spec()
      //     .post('/auth/signin')
      //     .withBody(dto)
      //     .expectStatus(200)
      //     .stores('userAt', 'access_token');
      // });
    });
  });
});
