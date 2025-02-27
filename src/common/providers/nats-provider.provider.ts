import { Provider } from "@nestjs/common";
import { NATS_SERVICE } from "../constants";
import { ClientOptions, Transport } from '@nestjs/microservices';
import { envs } from "src/config/envs.config";

export const natsProvider: Provider = {
  provide: NATS_SERVICE,
  useFactory: () => {
    const config: ClientOptions = {
      transport: Transport.NATS,
      options: {
        servers: [envs.natsUrl],
      }
    }
  }
}