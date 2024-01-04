sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'admin/test/integration/FirstJourney',
		'admin/test/integration/pages/BotList',
		'admin/test/integration/pages/BotObjectPage'
    ],
    function(JourneyRunner, opaJourney, BotList, BotObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('admin') + '/index.html'
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