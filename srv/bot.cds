using { id.apnv.sapbot as sapbot } from '../db/schema';

service BotService @(requires: 'authenticated-user') {

    entity Bot as projection on sapbot.Bot;

}
