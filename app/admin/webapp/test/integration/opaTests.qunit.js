sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'id/apnv/sapbot/admin/test/integration/FirstJourney',
		'id/apnv/sapbot/admin/test/integration/pages/BotList',
		'id/apnv/sapbot/admin/test/integration/pages/BotObjectPage'
    ],
    function(JourneyRunner, opaJourney, BotList, BotObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('id/apnv/sapbot/admin') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBotList: BotList,
					onTheBotObjectPage: BotObjectPage
                }
            },
            opaJourney.run
        );
    }
);