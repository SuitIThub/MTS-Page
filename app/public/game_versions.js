// Create a context for the images folder
const images = require.context("./images", false, /\.(png|jpe?g|svg)$/);

// Function to get the image by filename
const getImage = (filename) => {
    try {
        return images(`./${filename}`);
    } catch (e) {
        console.warn(`Image not found: ${filename}`);
        return null;
    }
};

export const versions = {
    "0.1.4C": {
        image: getImage("0.1.4.png"),
        downloadMainLink: "https://pixeldrain.com/l/sh5mzsEa",
        downloadLinkItem: {
            pc: {
                full: 0,
                compressed: 3,
            },
            mac: {
                full: 1,
                compressed: 4,
            },
            android: 2,
        },
        description: `
            <h3>Changelog 0.1.4C:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>Added Changelog in Main Menu</li>
                <li>Added Social Media Buttons in Main Menu</li>
                <li>Disabled Cafeteria Upgrade</li>
                <li>Fixed wrong label used in Aona Bra Event</li>
                <li>Fixed missing image in one of the Cafeteria Events</li>
            </ul>
            <div style="height: 10px;"></div>
            <h3>Changelog 0.1.4B:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>small cleanup tasks</li>
                <li>Added a bit of information about the use of old savegames on game startup</li>
                <li>Added a bit of information about member credits on game startup</li>
                <li>fixed error preventing some people from entering office</li>
            </ul>
            <div style="height: 10px;"></div>
            <h3>Changelog 0.1.4A:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>fixed error when loading old save-game saved during event</li>
                <li>small cleanup of game distribution</li>
            </ul>
            <div style="height: 10px;"></div>
            <h3>Changelog 0.1.4:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>added 1242 images which doubles the image count up to 2370 images total</li>
                <li>added 128 new animations (most of them are for the Movie Sandbox)</li>
                <li>added about 10 new regular events</li>
                <li>added about 5 new work events</li>
                <li>added some repeatable naughty time with secretary</li>
                <li>Improved notification system</li>
                <li>Improved image system</li>
                <li>Improved gallery system</li>
                <li>Implemented Event Composits</li>
                <li>Introduced Subject Proficiencies for headmaster</li>
                <li>Introduced new Subject - History</li>
                <li>Introduced Sandbox Movie System</li>
                <li>Reworked the tutorial</li>
                <li>Reworked the school map</li>
                <li>Reworked the journal</li>
                <li>Reworked stat changes for some events to make them less brutal</li>
                <li>Tons of prepwork needed for special project planned for 0.1.5</li>
                <li>Lots of bugfixing</li>
                <li>Lots of improvement to existing systems in game code</li>
                <li>added 1242 images which doubles the image count up to 2370 images total</li>
                <li>added 128 new animations (most of them are for the Movie Sandbox)</li>
                <li>added about 10 new regular events</li>
                <li>added about 5 new work events</li>
                <li>added some repeatable naughty time with secretary</li>
                <li>Improved notification system</li>
                <li>Improved image system</li>
                <li>Improved gallery system</li>
                <li>Implemented Event Composits</li>
                <li>Introduced Subject Proficiencies for headmaster</li>
                <li>Introduced new Subject - History</li>
                <li>Introduced Sandbox Movie System</li>
                <li>Reworked the tutorial</li>
                <li>Reworked the school map</li>
                <li>Reworked the journal</li>
                <li>Reworked stat changes for some events to make them less brutal</li>
                <li>Tons of prepwork needed for special project planned for 0.1.5</li>
                <li>Lots of bugfixing</li>
                <li>Lots of improvement to existing systems in game code</li>
            </ul>
        `,
    },
    "0.1.3B": {
        image: getImage("0.1.3.png"),
        downloadMainLink: "https://pixeldrain.com/l/Jpq6zN4L",
        downloadLinkItem: {
            pc: {
                full: 0,
                compressed: 3,
            },
            mac: {
                full: 1,
                compressed: 4,
            },
            android: 2,
        },
        description: `
            <h3>Changelog 0.1.3B:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>fixed a Crash when game tries to download Supporter List, while having no internet connection</li>
                <li>Added Social Media Buttons in Main Menu</li>
                <li>possibly fixed a crash on MacOS (can't really test that, so only hope remains)</li>
                <li>fixed a typo</li>
                <li>made the bento event more likely to fire.</li>
            </ul>
            <div style="height: 10px;"></div>
            <h3>Changelog 0.1.3A:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li><b>Cafeteria</b>: Introduced Cafeteria</li>
                <li><b>Cafeteria</b>: Added 6 Events to Cafeteria</li>
                <li><b>Cafeteria</b>: Added new Rule for Cafeteria or other things (Adelaide seems to be stressed sometimes...)</li>
                <li><b>Courtyard</b>: Added 3 Events to Courtyard</li>
                <li><b>School Building</b>: Added 3 new Events to School Building</li>
                <li><b>School Building</b>: Introduced new Introduction Event when teaching class for first time.</li>
                <li><b>Gym</b>: Added new teaching event</li>
                <li><b>PTA</b>: Extended PTA Introduction to now introduce all teachers and parents.</li>
                <li><b>Characters</b>: All different Schools have now been merged to one school but different classes. No more stat-grinding for all Schools</li>
                <li><b>Journal</b>: Added a new budget-overview. Always keep your money in check. (New ways to earn money comes with next update.)</li>
                <li><b>Journal</b>: Added Replay Gallery to Journal. (Bottom right tag in Journal)</li>
                <li><b>Locations</b>: Replaced all background-images for all locations.</li>
                <li><b>Events</b>: Introduced a new System for the determination of values and data used by the events. Particularly useful for adding new Events or modding. Also used for the gallery.</li>
                <li><b>Image-System</b>: Improved the image system for more dynamic usage.</li>
                <li><b>UI</b>: Small changes to UI for much aesthetics.</li>
                <li><b>QoL</b>: Added more information in Journal to prevent players from being confused over what can be unlocked and what not.</li>
                <li><b>QoL</b>: Added a bit of extra information during introduction phase.</li>
                <li><b>QoL</b>: Special events now are marked. The location will glow red and the action will be marked with red dots, to show where to find the event.</li>
                <li><b>Bugfix</b>: Fixed Softlock during introduction phase when saving and loading. (Hopefully)</li>
                <li><b>Bugfix</b>: Fixed temporary events being replayed, when they shouldn't.</li>
                <li><b>Known Bug</b>: When selecting a value in the gallery, an error occurs sometimes. I wasn't really able to determine why it happens, but it is harmless. Just Rollback once and it's fixed.</li>
            </ul>
        `,
    },
    "0.1.2B": {
        image: getImage("0.1.3.png"),
        downloadMainLink: "https://pixeldrain.com/l/ndH2gqes",
        downloadLinkItem: {
            pc: 0,
        },
        description: `
            <h3>Changelog 0.1.2B:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>Changed the vote button in the journal to show if the rule or else can be unlocked or if it's not implemented.</li>
                <li>Added some text to the description of some rules, clubs or buildings, stating that they are not yet implemented and cannot be voted on.</li>
                <li>Some events were planned and dialogues implemented in advance. These should not have been visible at the time, as they were intended for later stages of the game. These are now locked and inaccessible as they are missing images and are subject to change.</li>
                <li>The probability of voting on rules and other issues has been changed. Each party now has a base probability of 100% if the necessary requirements are fully met. Please note that students, teachers and parents have different stats, so they must be raised separately. Parents' stats cannot currently be raised and the stats of teachers and parents cannot currently be viewed. This will change in version 0.1.3. However, the current unlockable rule can be unlocked relatively easy. The whole vote calculation is subject to change in version 0.1.3.</li>
                <li>There was an event in the office that was still firing, even though it was supposed to be obsolete with the passing of a certain rule. This has been fixed.</li>
                <li>Changed the wording in a single sentence in the intro to make it make more sense, both in content and grammar.</li>
            </ul>
            <div style="height: 10px;"></div>
            <h3>Changelog 0.1.2:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>19 new regular events</li>
                <li>1 special event</li>
                <li>~2000 new words</li>
                <li>over 400 new Images</li>
                <li>navigation per keyboard shortcuts</li>
                <li>pta-voting</li>
                <li>individual outfits and names for each character</li>
                <li>A dedicated page in the journal for all my loving supporters!</li>
                <li>Stat changes were rerolling when saving and loading the game directly after an event</li>
                <li>UI ratios not fitting in Android variant</li>
            </ul>
        `,
    },
    "0.1.1A": {
        image: getImage("0.1.1.png"),
        downloadMainLink: "https://pixeldrain.com/l/bhFQ2BLU",
        downloadLinkItem: {
            pc: 1,
            android: 0,
        },
        description: `
            <h3>Changelog 0.1.1A:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li><b>Events</b>: Not really a event but I added a small epilogue sequence at the end of the game introduction. The previous description on what role the potion will play in the game seemed to not be clear enough, so that new sequence is hopefully clearing that up a bit</li>
                <li><b>Characters</b>: The characters now have names!</li>
                <li><b>UI</b>: The ability to hide the GUI has been readded after making it work properly</li>
                <li><b>UI</b>: Added transitions between the images. You can disable or change the transition speed in the preferences, if you like to hav your juicy transitions a bit faster.</li>
                <li><b>UI</b>: The textbox background is now modifiable in the preferences as well. You can choose between original, 50% transparency or no box at all.</li>
                <li><b>Images</b>: The image format has been changed so the final size has been reduced by ~70%</li>
                <li><b>Bugs</b>: The use of the headmasters name was not consistent throughout the game, this has now been fixed.</li>
                <li><b>Bugs</b>: There seemed to be a case where images were missing. I found something that could have been this and fixed it, but I can't 100% confirm that this is definetly fixed as I can't reproduce this problem.</li>
                <li><b>Bugs</b>: There was a bug where the first event on day 1 was not firing and the player was thrown into free roaming without anything to do until day 2. Couldn't reproduce that either, but the other events worked fine for the reporter so I just changed the way the day 1 events were called.</li>
            </ul>
            <div style="height: 10px;"></div>
            <h3>Changelog 0.1.1:</h3>
            <div style="height: 10px;"></div>
            <ul style="margin-left: 20px;">
                <li>413 Images</li>
                <li>8 Animations</li>
                <li>6000 Words</li>
            </ul>
        `,
    },
};
