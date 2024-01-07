import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { AlarmsModule } from './alarms/application/alarms.module';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { AlarmsInfrastructureModule } from './alarms/infrastracture/alarms-infrastracture.module';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastructure(
          AlarmsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
