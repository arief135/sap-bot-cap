sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'id.apnv.sapbot.admin',
            componentId: 'BotObjectPage',
            contextPath: '/Bot'
        },
        CustomPageDefinitions
    );
});