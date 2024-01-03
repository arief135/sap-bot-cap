using {
    cuid,
    managed
} from '@sap/cds/common';

namespace id.apnv.sapbot;

entity Bot : managed {
    key ID         : Integer;
        name       : localized String(111);
        descr      : localized String(1111);
        telegramID : String
}

entity SAPProperties : cuid {
    ipAddress : String;
    client    : String;
    router    : String;
    sid       : String;
    user      : String;
    password  : String;
}

entity BotFunction : cuid {
    name  : String;
    descr : String;
}

entity Session : cuid, managed {
    bot   : Association to Bot;
    steps : Association to many SessionStep
                on steps.parent = $self;
}

entity SessionStep : cuid, managed {
    parent : Association to Session;
    step   : Association to BotFunction;
    status : String;
}
