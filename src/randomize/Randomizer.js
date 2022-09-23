export default class Randomizer {

    constructor() {
        const map = {}
        photos.forEach(image => {
            if(map[image]) {
                console.log(`Found duplicate entry ${image}`)
            } else {
                map[image] = true
            }
        })

        console.log(`Loaded Images: ${Object.keys(map).length}`)
    }

    getSongForm() {
        return getRandomFromArray(songForms)
    }

    getThemeForm(form) {
        if(songForms.includes(form)) {
            return [getRandomFromArray(phrases), getRandomFromArray(phrases)]
        } else {
            return [getRandomFromArray(phrases)]
        }
    }

    getTempo() {
        return `${getRandom(110) + 50}bpm`
    }

    getMeter() {
        return getRandomFromArray([...basicTimeSignatures, ...timeSignatures])
    }

    getSimpleMeter() {
        return getRandomFromArray(basicTimeSignatures)
    }

    getKey() {
        return getRandomFromArray(keys)
    }

    getThemeExtras() {        
        const extras = {}

        extras.harmony = getRandomFromArray(harmonies)
        extras.interval = getRandomFromArray(intervals)
        extras.secondaryInterval = getRandomFromArray(intervals)

        while(extras.interval === extras.secondaryInterval) {
            extras.secondaryInterval = getRandomFromArray(intervals)
        }

        if(extras.harmony === 'Mode') {
            extras.harmony = "The " + getRandomFromArray(modes) + " mode"
        }

        return extras
    }

    getSceneImage() {
        return getRandomFromArray(photos)
    }

    isSimpleMeter(meter) {
        return basicTimeSignatures.includes(meter)
    }

}

function getRandomFromArray(array) {
    return array[getRandom(array.length)]
}
function getRandom(limit) {
    return Math.floor(Math.random() * limit)
}

/* Vars */
const keys = ['C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major', 'F# Major', 
              'Db  Major', 'Ab  Major', 'Eb  Major', 'Bb  Major', 'F  Major', 
              'A Minor', 'E  Minor', 'B  Minor', 'F#  Minor', 'C#  Minor', 'G#  Minor', 
              'D#  Minor', 'Bb  Minor', 'F  Minor', 'C  Minor', 'G  Minor', 'D  Minor']

const basicTimeSignatures = ['3/4', '4/4', '6/8']
const timeSignatures = ['2/4', '5/4', '6/8', '9/8', '7/8', '5/8', '12/8', '6/4', '2/2']

const songForms = ['Binary Form (AB)', 'Ternary Form (ABA)']

const phrases = ['Period', 'Sentence']

const harmonies = ['Modal Interchange', 'Secondary Dominants', 'Strict Functional Harmony', 'Strict Diatonic Harmony', 'Mode', 'Line Cliche',
'Tertian Harmony', '7th Chords', 'Extended Chords', 'II-V-I progression', 'Passing Chords', 'Hybrid Chords', 'Inverted Chords', 'Suspended Chords']

const intervals = ['3rds', '4ths', '5ths', '6ths', '7ths', 'octaves', '9ths']

const modes = ['Lydian', 'Ionian', 'Mixolydian', 'Dorian', 'Aeolian', 'Phrygian', 'Locrian']

const photos = [
    'https://cdn.pixabay.com/photo/2019/11/14/21/12/village-4627131_1280.jpg', 
    'https://cdn.pixabay.com/photo/2020/08/15/06/03/earth-5489719_1280.jpg', 
    'https://cdn.pixabay.com/photo/2018/04/15/19/56/fantasy-3322691_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/04/11/13/beautifull-morning-in-village-6067691_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/01/10/15/30/castle-6928593_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/02/04/13/51/night-3129908_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/11/28/16/48/castle-5785243_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/25/09/13/bridge-2887353_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/12/21/13/00/city-6885193_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/11/29/14/29/new-zealand-4661427_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/15/02/22/fantasy-2750995_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/29/13/59/trees-4727156_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/06/22/12/53/galaxy-4291517_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/05/06/00/15/cyberpunk-5135622_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/08/18/10/27/steampunk-4413878_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/06/16/24/steampunk-5894941_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg',
    'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/09/05/20/07/cabin-924958_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/09/13/14/06/new-york-938212_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/22/15/45/lighthouse-2165383_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/02/16/12/nature-3719233_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/01/18/57/mountains-6060586_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/11/05/12/28/stairs-205718_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/16/12/03/woman-6099577_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/19/47/water-1283963_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/09/06/00/35/temple-3657496_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302623_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/05/20/22/58/lost-places-776297_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/01/22/20/42/man-1156619_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/01/21/20/13/kouris-dam-4783880_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/27/11/12/cathedral-3265697_1280.png',
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/07/20/01/industry-3068200_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/05/06/14/43/merida-109143_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/06/29/17/35/tree-4306636_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/10/27/22/15/halloween-4582988_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/10/22/09/32/pumpkins-5675502_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/12/28/20/00/dark-1936954_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/10/07/13/18/mystery-4532583_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/28/00/57/bank-2547356_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/21/12/30/dark-1845065_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/17/01/45/tree-4700542_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/29/01/52/forest-696838_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/07/01/12/52/forest-4309913_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/16/11/42/wolf-2234511_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/07/31/18/20/thunderstorm-4375844_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/06/24/23/03/railway-2439189_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/10/14/44/train-1728537_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_1280.jpg',
    'https://cdn.pixabay.com/photo/2010/12/06/22/soldiers-1002_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/11/08/11/41/destruction-2930152_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/02/23/22/48/light-3176887_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/02/25/07/39/church-648430_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/04/10/15/37/snowman-321034_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/11/24/02/05/christmas-lights-3834926_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/10/10/53/architecture-4685608_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/08/01/00/08/trees-407256_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/08/26/01/38/halloween-7411538_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/09/13/10/57/halloween-7451643_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/25/06/15/father-and-son-2258681_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/06/23/09/tree-1959267_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/11/29/20/11/fantasy-3846418_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/02/20/16/59/deer-643340_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/11/23/03/17/christmas-2971961_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/07/26/indiana-dunes-state-park-1848559_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/10/30/beach-1838501_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/05/09/16/06/windsurfing-2298647_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/04/01/15/05/big-waves-2193828_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/16/22/36/balloon-fiesta-1746495_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/05/20/02/38/chicago-1404489_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/02/20/01/04/new-york-city-83522_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/11/11/03/55/band-526330_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/13/15/51/polish-4693293_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/10/08/15/aircraft-1813731_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/05/01/12/24/ship-2275399_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/03/24/11/21/thunder-4963719_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/06/09/15/57/aircraft-3464648_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/03/11/18/man-3581659_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/30/09/28/buildings-5528981_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/25/05/14/shipwreck-2096945_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/07/27/05/13/lighthouse-168132_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/06/04/23/17/lighthouse-2372461_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/16/12/55/winter-1828779_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/05/28/20/30/canal-114290_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/08/20/19/34/rowing-898008_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/11/29/14/18/mirroring-4661419_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/04/19/30/cesar-tower-3584313_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/31/23/08/neuschwanstein-701732_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/11/01/18/46/dubrovnik-512798_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/21/22/35/san-galgano-1610962_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/07/28/19/38/lost-places-1549096_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/07/11/20/34/lost-places-1510592_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/05/14/23/13/meadow-7196549_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/05/09/15/28/bee-6241306_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/05/08/21/01/fruit-1379911_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/30/15/35/autumn-2021154_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/21/01/50/wood-3095720_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/11/05/20/16/horses-5716127_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/05/23/16/59/homestead-780767_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/08/17/01/30/horse-419738_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/02/06/01/09/horses-78223_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/09/19/16/17/colorado-1680631_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/09/21/57/texas-1581901_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/04/14/13/06/landscape-1328858_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/11/01/08/52/science-fiction-2907434_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/04/08/37/ufo-1951536_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/04/18/17/wallpaper-3584226_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/11/20/14/16/spaceship-3827533_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/31/14/30/fantasy-2700914_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/12/03/00/26/planets-5799077_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/12/18/19/50/fantasy-4704771_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/01/14/42/knight-2565957_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/27/00/46/fantasy-2543658_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/09/14/10/45/spaceship-5570682_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/06/24/12/40/easter-island-1477188_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/21/09/25/rocks-1757593_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/09/21/17/56/mountaineering-455338_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/01/27/22/32/mountains-3959204_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/19/08/57/mountains-1752433_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/05/03/13/59/fisherman-4175917_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/14/04/27/children-1822590_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/05/05/01/05/nature-7175030_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/20/21/08/sunset-2160352_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/07/06/08/59/landscape-7304666_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/11/25/20/52/river-6824576_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/06/28/00/13/castle-1483681_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/11/15/23/29/fairytale-532850_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/05/29/17/39/noble-789501_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/05/18/22/17/travel-5188598_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/05/17/40/saint-peters-basilica-2040718_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/12/15/04/21/skyscraper-6871750_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/12/21/13/00/street-6885193_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/04/14/14/tianjin-3723726_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/04/11/14/21/woman-7125867_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/01/16/14/31/train-5922321_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/13/15/57/steampunk-3222894_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/09/22/04/54/surreal-6645614_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/09/06/14/40/beach-7436793_1280.jpg',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2282&q=80',
    'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1440407876336-62333a6f010f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80',
    'https://images.unsplash.com/photo-1498015583783-4abcab4a760a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80',
    'https://images.unsplash.com/photo-1474267119072-677dd7959e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1567604130959-7ea7ab2a7807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1531645950890-0d834749fc81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1514856841774-b927b221d7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1431888864265-0df446c01588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1523299412748-aa5ecad3d995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1477516561410-f0b5dd8319e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
    'https://images.unsplash.com/photo-1530605290309-ebfe523e6605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1514944152559-a103040c7f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    'https://images.unsplash.com/photo-1530758984765-9fa189425c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1544586428-d55e8f24e354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1578652229330-05f320786aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1616627577385-5c0c4dab0257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1581888517319-570283943d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5065550/pexels-photo-5065550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4641135/pexels-photo-4641135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg',
    'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2812164/pexels-photo-2812164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2681631/pexels-photo-2681631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/219867/pexels-photo-219867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1620278420080-3e320b107b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2332&q=80',
    'https://images.pexels.com/photos/12562955/pexels-photo-12562955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13297062/pexels-photo-13297062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13054203/pexels-photo-13054203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/12238320/pexels-photo-12238320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13639243/pexels-photo-13639243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4808801/pexels-photo-4808801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13430133/pexels-photo-13430133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13347986/pexels-photo-13347986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13398530/pexels-photo-13398530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1663856542320-639f788ac5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    'https://images.unsplash.com/photo-1587502536263-5dda37cd33f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    'https://images.unsplash.com/photo-1663850598470-3ba63b6c381c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
    'https://images.unsplash.com/photo-1663850565809-10336f80187d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1663861386086-7822486c6a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1663790913610-fbae9cf3d2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1663860307386-891a5beb6e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1663841964768-c78da395a87f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1442570468985-f63ed5de9086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2420&q=80',
    'https://images.unsplash.com/photo-1542672701-2ec46535709f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1636061775275-7fb8bd80af19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    'https://images.unsplash.com/photo-1572987686381-3a2f3974b89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1514043016-1076e5413b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80',
    'https://images.unsplash.com/photo-1603270504031-4344a08b28b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1515112954428-fce1b0c3f4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    
]