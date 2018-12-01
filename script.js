let china=document.getElementById("China");
let japan=document.getElementById("Japan");
let korea=document.getElementById("Korea");
let sweden=document.getElementById("Sweden");
let norway=document.getElementById("Norway");
let denmark=document.getElementById("Denmark");
let iceland=document.getElementById("Iceland");
let greece=document.getElementById("Greece");
let roe=document.getElementById("Rest of Europe");
let india=document.getElementById("India");
let russia=document.getElementById("Russia");
let saudi=document.getElementById("Saudi Arabia");
let holy=document.getElementById("Holy Land");
let aus=document.getElementById("Australia");
let ame=document.getElementById("America");
let canada=document.getElementById("Canada");
let alaska=document.getElementById("Alaska");
let greenland=document.getElementById("Greenland");
let malay=document.getElementById("Malaysia");
let uk=document.getElementById("United Kingdom");

//groups - ie. g tags 
let asia=document.getElementById("Far East Asia");
let farnorthame=document.getElementById("Far North America");
//let northame=document.getElementById("North America");
//let europe=document.getElementById("Europe");
let scandi=document.getElementById("Scandinavia");


//index 0: theme 1, index 1: theme 2, index 2:theme 3 etc. x represents no info
const chinaText= ["x","<p><i>The three legged crow often depicted in East Asia was called <i>'Sanzuwu'</i> in China. It was coloured red and associated with the sun.</i></p><br><p>In Chinese mythology, there were once 10 of these sun-birds/'jun-ravens' that took turn to fly into the sky to be the sun for the day. They would travel around the world in a carriage driven by the goddess Xihe, their 'mother'. Around 2170BC all 10 sun-birds emerged in the sky, causing the world to scorch and the earth to drought. Emperor Yao asked the father of the suns, Di Jun to persuade his children to appear one at a time, but since they would not listen Di Jun sent Houyi who shot all but one of the suns down.</p><br><p>Both Tibet and China have themes of the (regular) raven as a messenger: in Tibet, they thought ravens acted on behalf of a supreme being, whilst in China it was a raven that caused storms to blow through forests to warn inhabitants whenever the gods were about to pass through.</p>","x","x","<p>The places crows chose to nest were thought to be significant. They could predict everything from the recovery of a monarch to good crops and military success.</p>","x","<p>In Tibet, the raven is seen as an auspicious bird and hence considered sacred.</p>"];
const koreaText=["x","x","x","x","<p>The places crows chose to nest were thought to be significant. They could predict everything from the recovery of a monarch to good crops and military success.</p>","<p><i>The three legged crow often depicted in East Asia was called <i>'Samjokgo/Samjok-o'</i> in Korea. Considered to originate from the Chinese version.</i></p><br><p> It was a symbol of power, and particularly associated with the Koguryo Kingdom as it is depicted during that period in tomb wall murals. In the murals, it is given central prominance, flanked by the dragon and phoenix; symbolic of kingly power and higher in ranking than the dragon and phoenix.","x"];
const japanText=["x","<p><i>The three legged crow often depicted in East Asia was called <i>'Yatagarasu'</i> in Japan. Yatagarasu can be translated as '8-span crow', the number 8 in Japan having meanings of 'many','multitude','perfect' or 'supreme', so this also meant 'large crow' or 'surpreme/perfect divine crow'. Considered to originate from the Chinese version.</i></p><br><p>Yatagarasu was sent from heaven as a guide for Emperor Jimmu (the first mythical emperor of Japan) on his first journey from (what would become) Kumano to Yamato. It has traditionally been interpreted as evidence of divine intervention in human affairs.</p>","x","x","<p>The places crows chose to nest were thought to be significant. They could predict everything from the recovery of a monarch to good crops and military success.</p>","<p><i>The three legged crow often depicted in East Asia was called <i>'Yatagarasu'</i> in Japan. Yatagarasu can be translated as '8-span crow', the number 8 in Japan having meanings of 'many','multitude','perfect' or 'supreme', so this also meant 'large crow' or 'surpreme/perfect divine crow'. Considered to originate from the Chinese version.</i></p><br><p>Yatagarasu was worshipped in a few temples under his own name (<i>Kamo-no-taketsu-numi-no-mikoto</i>) and several important and key festivals are held in honour of him in Kumano temples and shrines. Yatagarasu is also considered the ancestor of the Kamo clan, and it is also said that the Kamo clan people are incarnations of 'Yatagarasu'.</p>","x"];
const malaysiaText=["<p>A local legend in the Malay Peninsula tells the tale of the pheasant and the crow: thousands of years ago, the pheasant was a drab bird, so it decided to ask its crow friend to paint its feathers. The crow agreed, producing a beautiful costume, but when the crow asked for a similar favour, the pheasant refused and split black ink onto the crow in the resulting quarrel. Since then, they have been sworn enemies.</p>","x","x","x","x","x","x"];
const indiaText=["x","<p><i>The crow is regarded as a bird sacred to Shiva and Kali.</i> Brahma also appears as a raven in one incarnation, and the two-headed deva Shani is depicted sitting on a crow, bringing the crow in check and protecting people against thievery (a quality the crow is associated with).</p>","x","x","x","x","x"];
const swedenText=["x","<p>Ravens were considered the sacred bird of Odin, and were his spies, messengers, and pioneers all in one. 'Hugen'/'Huginn' and 'Munen'/'Munnin' (<i>Mind and Memory</i> were two ravens let loose every morning to collect intelligence about events in the world, which were later whispered into Odin's ear in the evening.</p>","<p>Swedes believed that the souls of murdered people who had not received proper Christian burial resided inside ravens.</p>","x","<p>Vikings believed that ravens had the power of human speech and could understand what they heard. They also had the power to anticipate future slaughter, and followed armies to benefit from feasts to come.</p>","x","x"];
const norwayText=["x","<p>Ravens were considered the sacred bird of Odin, and were his spies, messengers, and pioneers all in one. 'Hugen'/'Huginn' and 'Munen'/'Munnin' (<i>Mind and Memory</i> were two ravens let loose every morning to collect intelligence about events in the world, which were later whispered into Odin's ear in the evening.</p>","x","x","<p>Vikings believed that ravens had the power of human speech and could understand what they heard. They also had the power to anticipate future slaughter, and followed armies to benefit from feasts to come.</p>","x","x"];
const denmarkText=["x","<p>Ravens were considered the sacred bird of Odin, and were his spies, messengers, and pioneers all in one. 'Hugen'/'Huginn' and 'Munen'/'Munnin' (<i>Mind and Memory</i> were two ravens let loose every morning to collect intelligence about events in the world, which were later whispered into Odin's ear in the evening.</p>","<p>In Denmark, the death of a priest was foretold by the appearance of a raven, who were also believed to be exorcised spirits.</p>","x","<p>Vikings believed that ravens had the power of human speech and could understand what they heard. They also had the power to anticipate future slaughter, and followed armies to benefit from feasts to come.</p>","x","x"];
const icelandText=["x","<p>Ravens were considered the sacred bird of Odin, and were his spies, messengers, and pioneers all in one. 'Hugen'/'Huginn' and 'Munen'/'Munnin' (<i>Mind and Memory</i> were two ravens let loose every morning to collect intelligence about events in the world, which were later whispered into Odin's ear in the evening.</p>","x","x","<p>Vikings believed that ravens had the power of human speech and could understand what they heard. They also had the power to anticipate future slaughter, and followed armies to benefit from feasts to come.</p>","x","x"];
const unitedkingdomText=["x","<p>Ravens were the favourite bird of Lludd, the Celtic god of artists and artisans, who had 2 raven attendants. Celtic war goddesses often took the form of ravens, and many of the more aggressive goddesses linked with war and death are associated with ravens (for example, <i>Badb</i>, <i>Macha</i> and <i>Nemain</i>).</p><br><p> Among Irish Celts, the Morrigan took the shape of a raven over battlefields, acting as a protector of warriors and 'chooser of the slain'. Ravens were also messengers for the gods.)</p><br><p>The mythical king Bran the Blessed was associated with ravens (the name 'Bran' means raven). When he was beheaded, his head was buried at the side of the Tower of London, and acts as a protective charm for Britain.</p>","<p><i>In Irish and western Scottish folklore, hooded crows ('roytson crows') are fairies in avian form. If one settled on a cottage, someone living there would die, or some other misfortune would befall them and their family. Likewise, Irish and Scottish Sidehes (Banshees) could take the form of ravens; a call over the roof of a dwelling was an omen of death for its inhabitants.</i> </p><br><p>Of course, there is the famous belief: <i>Should the ravens forsake the Tower of London, Britain's downfall will follow.</i> Recent research has shown that this is a Victorian invention rather than centuries old, but it has become so ingrained into the legend of the Tower that there is a Ravenmaster hired specifically to care for the ravens (which are tagged). Folklore also says that truly wild ravens lived in the Tower and fed on the executed enemies of the monarch.</p><br><p>Ravens were often associated with Celtic goddesses of war and death. And in England, if a raven under a great household's protection died violently, then it was a sure sign that a member of the family was to die within the year.</p>","x","<p>Hooded Crows ('roytson crows') are considered fairies in avian form in Irish and western Scottish folklore. Irish and Scottish Sidhes (Banshees) could also take the form of ravens.</p><br><p>In Irish and Welsh myth, one characteristic of the raven was its affinity for prophecy (the Morrigan who often took raven form was prone to predicting the outcome of a battle, for example).</p><br><p>Don Quixote tells that King Arthur did not really die, instead changing into a raven. The day when he will assume former shape and claim his former rights is supposedly still to come. Hence, it would be unlucky to shoot one.</p>","x","<p>In the Highlands of Scotland, a raven heard or seen at the start of important activities (for example, hunting, fishing) foretold good luck.</p><br><p>In 17th century Ireland, a raven with white on its wing flying on someone's right hand side and croaking at the same time was a sure sign of good fortune.</p>"];
const greeceText=["<p><i>To the Ancient Greeks and Romans, a white raven was as impossible a sight as a black swan.</i> Aesop's raven and swan fable alludes to this, in which the raven, desiring the swan's white feathers, flew down to the river and decided to live in it, as it believed the swan's white feathers was due to this. Washing in the water had no effect, and the raven could not fish so perished. Moral of the story: change of habit cannot change nature. </p>  <br><br>   <p>The raven was once white in plumage, but then had spied on Apollo's then-lover, <i>Coronis</i>, and found her heart was elsewhere. It had reported this to Apollo, its patron god, who shot his lover in jealousy, regretting too late what he had done. As punishment for being a chatterbox, Apollo turned the raven's plumage from white to black.</p>","<p><i>Ovid, an ancient Roman writer, wrote about how the raven was Apollo's 'favourite bird and messenger', and was its patron god. However, the raven was not necessarily a good messenger/errand-runner as its duty wasn't always done when it was sent out by Apollo. </i></p><br><p> The story of the bowl and snake highlights this (and the raven's tendency for laziness, cunning, impudence and greed): Apollo had sent the raven with a bowl to collect lustral water from a spring in honour of a festival to Jupiter. He got distracted by the green figs over the spring and decided to wait for them to ripen so he could eat them. Once eaten, he killed a giant snake, carried it back with the water and bowl and claimed that it was because of the snake that he was so late.</p><br><p>Apollo rebuked him harshly for attempting to lie about his actions and punished him. The raven would never taste the water from any spring so long the figs were still hanging on the tree.</p><br><p>The raven's voice has been harsh from thirst since. Furthermore, the raven, snake and bowl can be seen in the constellation <i>Corvus</i> side by side ever since as a memorial.</p>","<p><i>When Alexander the Great returned from the remote East to Babylon in triumph, there was a gathering of ravens. This was believed by the Greeks and Orientals alike to foreshadow his death. Likewise, the Roman statesmen Cicero was supposedly warned of his own death on the day he was murdered by fluttering ravens and was awoken by one pulling at his bedclothes.</i></p><br><p>Both Ancient Greeks and Romans had curses related to ravens. '<i>Pasce corvos</i>' ('be food for the ravens') in Latin was equivalent to 'go to the ravens' or 'fling him to the ravens' amongst Greeks. More severe curses involved implications of utter disgrace and ruin, with death and mutilation by ravens (called 'birds of evil omen') without a proper burial, which meant that Charon would not ferry the soul over the Styx. </p><br><p>Whilst there were other birds that brought omens, the Ancient Romans thought that the raven was the 'head of all the birds of omen'. According to Pliny, the raven and crow alone seemed to realise what the omens they gave meant (compared to eagles, owls, woodpeckers etc.)</p>","<p><i>In fable, the raven amongst birds is what the fox is amongst (land) animals: the most cunning, the most unscrupulous, the most dextrous, and the most knowing of them all.</i> </p><br><p>An Aesop fable that clearly shows the intelligence of the crow is the Crow and Pitcher fable- where the crow drops stones into the pitcher of water until the water level rises high enough for it to drink from it. Moral: little by little does the trick, or neccessity is the mother of invention. However, this cunning is depicted in a more negative light in the Crow and the Sheep fable, where a crow is described harassing a sheep, who points out that a dog would not have stood for this. The crow replies that it picked its targets carefully for this reason.</p><br><p>In one of Aesop's fables, the crow is also shown as untrustworthy as it forgets to make an offering to Apollo as thanks for him releasing it from a snare. It pays for it later when it gets caught again and no other god is willing to help it despite promises of offerings as it has already lied once.</p>","<p>Old Herod claimed that the raven lived to an immense age. This was supported by other ancient writers such as Pliny, Ovid, Horace, and Cicero.</p>","x","x"];
const restofeuropeText=["<p>In the Austrian Tyrol (a region in the Alps), it is said that ravens' plumage were turned black as a punishment from Jesus, who had wished to drink from the stream which they had fouled.</p>","x","<p><i>The raven was near-universally regarded as a bird which not only forsaw evil, but gloated over it and helped bring it on, as well as being the devil's own bird.</i> Such is the raven's reputation, that legend has connected every misfortune over the past few centuries that has happened to the House of Hapsburg with the appearance of a raven.</p><br><p>In the Languedoc region of France, it was believed that the souls of wicked priests inhabited ravens, whilst the souls of wicked nuns dwelled inside crows.</p><br><p>In Andalusian (southern Spain), if a raven croaked over a house, an unlucky day would follow; if it croaked 3 times death would follow. If it perched somewhere high up, croaked, and turned repeatedly, then the corpse would come from that direction.</p><br><p>In some parts of Germany, it was thought that that witches rode upon a raven (which contained the souls of the damned) and that the Evil One himself could assume raven form.</p>","x","<p>Some parts of Europe thought that crows had special connections with storks and flew with them when they migrated. These crows ruled over storks but were more like benign dictators, fighting and driving off would-be avian harassers.</p><br><p>A widespread belief in central Europe was that 'raven stones' when acquired gave magic powers to the holder dependent on the type of stone. The release stone was a valuable aid in childbirth that required the muzzling of fledglings of 15 June (St. Vitus' Day) and waiting until the henbird brought the stone and stealing it before she flew away again. The invisibility stone required the boiling of a raven's egg and tricking the henbird into incubating it. If the stone was removed before the henbird deserted the nest, inside would be a stone that would make the user invisible if placed under the right armpit.</p><br><p> The most sought-after stone was the life stone that could prolong life and even resurrect the dead. The henbird had to be over 100 years old,  the young less than 6 weeks old. All would be killed except for one male whose beak would be opened in preparation for the magic red stone the henbird would bring when she saw her killed young. The stone would need to be gotten before the male chick got it and placed under the left armpit for the magic to be evoked.</p>","x","x"];
const russiaText=["x","x","x","<p><i>There is a lot of similarity between the raven mythologies of the Northwest Coast of North America and the Northeastern Siberia area.</i>It can be suggested that the mythologies of the Koryak, indigenous people of the Russian Far East, are influenced by Native American stories.</p><br><p>Both groups depict the Raven character seperately or simultaneously as a transformer, trickster or dupe, although Big-Raven (ancestor of the Koryak) combines the lustful characteristics of the Pacific Northwest Coast culture hero Mink along with the raven's greediness and gluttony. In the tales related to him, he shows a love for indecent and coarse tricks which he does for his own amusement. There is also another depiction of the Raven character as 'Raven-man', described as a 'voracious rascal'.</p><br><p>Koryak myths in common with the Pacific Coast myths include the swallowing and releasing of the sun, the theft of fresh water, the loss of his beak, and various tricks to gain food. For example, to obtain the sun, one version is that Big-Raven becomes a small object and falls into the water which the daughter of the sun's owner drinks. She becomes pregnant and when born, he cries to play with the sun ball, and escapes with it when given, bringing daylight to the world.</p>","x","<p><i>In Koryak mythology (the Koryak are the indigenous people of the Russian Far East), the mythical raven (Big-Raven) is the organiser of the universe; the first man and the ancestor of the Koryak. He is worshipped as a creator and a god, an important part in their religion.</i></p><br><p>Big-Raven is regarded as the assistant of the Supreme Being, although tales of how he was created differ: some tales say he was created by the Supreme Being, whilst in others he created himself. During the time of Big-Raven ('the mythological age') all objects could turn into men and vice versa- Big-Raven could transform into a raven by putting on a raven coat and could turn into a man at will. He left humans suddenly since they refused to follow his teachings, ending the 'Mythological Age'. It is unknown what has happened to him. </p><br><p> Before he left, he gave light, drums, the fire-drill (used for making fire), incantations for amulets and reindeer to man. Plus, he taught them how to hunt land and sea animals and set up shamans to fight against evil spirits. </p>","x"];
const saudiarabiaText=["x","x","<p>The Quran notes that it was a raven sent by God who taught Cain how to dispose of Abel's corpse by killing a fellow raven and burying it out of sight. The crow/raven is also one of the 5 animals whose killing is not looked upon as a sinful act.</p>","x","x","x","x"];
const holylandText=["x","x","<p>Before he sent the dove, Noah first sent the raven to look for dry land. The raven found a carcass and decided to remain to eat it. Noah hence cursed the raven to be hated by men and to forever eat carrion, as recorded by the 9th century Muslim scholar Ibn Iarir al-Tabari. </p><br><p>An alternate punishment, as recorded by John Swan in Speculum Mundi (1643 AD) was that ravens became 'unnatural parents': the mother would leave young to starve in the nest since the young were red in colour (according to 4th century Egyptian commentary). The Nourisher of All Creation would therefore send insects until the young grew black. After 4 days, the old ravens return and bring food of their own accord since the young was now black like them. This temporary disgust would be repaid, for when the parents grew old they would die of starvation due to overgrown bills. The young would not help, but instead take the opportunity to attack them.</p><br><p>It is due to this tendency to eat carrion that it is called 'unclean' in the Old Testament. (However, Zoroastrians deem it a bird of purity since it removes pollution from the Earth by eating carrion).</p>","x","x","x","<p><i>Ravens were often cherished and faithful companions to early Christian saints and martyrs.</i> Not only did they often render great services to them, they were also as ready to prevent, detect and punish chrime. Ravens are always depicted favourably in these legends; for instance, it was a raven that brought St. Paul the Hermit half a load every day to eat.</p>"];
const australiaText=["<p>The first Aborigine legend speaks of the hawk and crow, who had agreed to share whatever game they had caught. The crow was very successful but also very greedy so hid the rest once it had fed. When the hawk asked where its share of the food was, the crow said it had none left and that the hawk was lazy. This angered the hawk (who had caught nothing) who attacked the crow; when the crow recovered, it found that it could not wash the black ashes the hawk had rolled it into off. It was also condemned to live on putrid flesh as punishment for hiding food it could not finish.</p><br><p>Another myth describes how Crow stole the secret of fire from 7 women using trickery and cunning, the embers turning him black in the ensuing confrontation. There are many variations of this myth: for instance, one version says that Crow's feathers became black when Eaglehawk's cousins chased him as he flew so fast the sticks caught fire. Another says that he became scorched when, frightened by the crowd's demands, he threw live coals down at the gathering crowd which started a bushfire.</p><br><p>A different myth is about the Eaglehawk and Crow feud: Eaglehawk had told Crow to take care of his chick; Crow had killed it as it kept on crying. When Eaglehawk found out, he chased Crow into thick mallee scrub in a fury, and set fire to the scrub to flush Crow out, the smoke and flames scorching Crow's feathers black. </p>","x","x","<p><i>To many, Waa Wahn the Crow is a moiety ancestor (a subsection system/social structure with two possible groupings, the other being Bunjil the eaglehawk). These people are called 'crow people'. After his time on Earth, he became the star Canopus. </i></p><br><p>Rather than a god, he is seen as more of an ancestral being. He is often a trickster character, though many of his tricks benefits those he plays them on. For example, he tricked Swamp Hawk into jumping into the deserted nest of a kangaroo rat in which he had placed echidna quills in; Swamp Hawk was pleased by this, for the quills ended up growing into his feet, meaning he could catch kangaroo rats more easily.</p>","x","x","x"];
const americaText=["<p><i>According to the Cherokee Indians, the raven had tried to bring fire to the world from a tree set alight by a bolt of lightning from the thunder god, blackened by soot and smoke in the process.</i></p> <br> <p>In the 'Rainbow Crow' myth by the Lenni-Lenape/Delaware people, the animals used to live in perpetual summer, until the Creator thought of winter. As food became barren and animals starved, Rainbow Crow (<i>with a beautiful voice and feathers of a thousand colours</i>) volunteered to fly to the heavens and ask the Creator to unthink winter. Winter unfortunately could not be unthought, but the Creator gave Rainbow Crow a stick lit with the Sun's fire instead. The fire it brought back saved the animals but had singed its feathers black and hoarsened its voice with soot in the process. <br> <i>Do not despair</i>, the Creator said to it one night, for when mankind came they would not hunt it for its meat would taste of smoke, nor trap it for its voice, so it would remain free. </p><br><p>On the opposite side of America (Pacific Northwest), Raven the trickster hero (in the form of a snow-white bird) had stolen various things from Grey Eagle's lodge, amongst which was a firebrand which turned his feathers black. </p><br><p>The Kiowa of the Great Plains say that crows became black after pecking out and eating snake eyes (considered 'unclean').</p></p>","x","<p>In the tales of the North Pacific Coast, the origin of death is explained thus: Raven needed helpers for work, so tried to create man from stone. He failed, so ended up creating them from leaves instead. Since the men originated from leaves they also died like leaves. It should be noted that the men created weren't the only men in existence, but death is still explained using this story.</p>","<p><i>Almost all of the trickster tales about the culture hero Raven are about his greed and endeavours to get lots of food without effort, and hence his attempts to cheat people out of their food and the punishment delivered in revenge.</i></p><br><p>Even in tales where he is portrayed as heroic he still remains a trickster who puts the satisfaction of his own desires first. He releases the sun not out of pity, but because he can, and the first time he uses the sun is when he tries to persuade fishermen to give him part of their catch. He gets the fresh water because he is thirsty, and spills it over the world by accident as he makes his escape. He releases the fish into the world because he is hungry, and he creates the tides in order to gather shellfish.</p>","<p><i>To Native Americans, the raven is the guardian of ceremonial magic and healing circles, for the colour black is symbolic of magical power.</i> The raven is also used as a messenger spirit that shamans use to project their magic over great distances. When peering into the future, the medicine man would wear the skin of ravens, with one worn like a hat such that its beak loomed over his face. </p><br><p>To the Cherokee Indians, the most feared of wizards or witches is the 'Raven Mocker', an androgynous-looking, (usually) withered and old figure who steals the lives of the dying and adds it to their own.</p>","<p><i>In Native American creation myths, Raven is often the central character, but is usually depicted more as a short-sighted and self-serving creature rather than noble or ambitious, that created the world by accident, as a side effect of trying to meet his own simple needs.</i> Tales that feature the Raven rather than the Coyote, for example, are specific to areas like the Pacific Northwest Coast and Northern British Columbia.</p><br><p> Although Raven transforms the world to its present state and influences human life to some extent, he is not usually the original creator of the world or man, nor is he worshipped. It was Raven who stole the sun, moon, the firebrand, fresh water and stars from Grey Eagle's lodge (the guardian of the sun, moon and stars). He then hung the sun, moon, and stars in the sky and whilst making his escape dropped the fresh water which became the lakes of the world, bringing fire, water and light to a world which before had none of this.</p>","x"];
const canadaText=["<p>An Inuit tale describes how the raven made a special summer coat for the snowy owl, and in return the owl made the raven a white suit and a pair of whalebone boots. During the fitting, the raven kept fidgeting around, and when the raven continued to fidget further despite warnings, the owl got so annoyed it poured lamp oil on it, turning it black.</p>","x","x","x","x","<p>The first raven in existence was also the Inuit's creator god. God-Raven created everything; for example, light out of mica flakes and humans out of rock. He was born into into a dark, empty world and created life in order to alleviate his loneliness, and once he created humans, he taught them how to survive, flourish and respect all living creatures.</p>","x"];
const alaskaText=["<p>An Inuit tale describes how the raven made a special summer coat for the snowy owl, and in return the owl made the raven a white suit and a pair of whalebone boots. During the fitting, the raven kept fidgeting around, and when the raven continued to fidget further despite warnings, the owl got so annoyed it poured lamp oil on it, turning it black.</p>","x","x","x","x","<p>According to the Koyukon people (who live near the Koyukuk river), it was the great raven <i>Dot-san-paa</i> who made the world; when a great flood came, he placed 2 of every living creature on a raft so they would survive.</p><br><p>Their near neighbouts, the Tlingit tribe, considered the raven the mythical ancestor of their race who performed many great deeds when the world was first formed. For instance, he decided the particular tasks each bird would perform, how they would look like and where they would like. Raven himself could transform himself into any shape, and could remove his feathers like a coat.</p>","x"];
const greenlandText=["<p>An Inuit tale describes how the raven made a special summer coat for the snowy owl, and in return the owl made the raven a white suit and a pair of whalebone boots. During the fitting, the raven kept fidgeting around, and when the raven continued to fidget further despite warnings, the owl got so annoyed it poured lamp oil on it, turning it black.</p>","x","x","x","x","<p>The first raven in existence was also the Inuit's creator god. God-Raven created everything; for example, light out of mica flakes and humans out of rock. He was born into into a dark, empty world and created life in order to alleviate his loneliness, and once he created humans, he taught them how to survive, flourish and respect all living creatures.</p>","x"];




//all fill colours
const colourArray = ["filled1", "filled2", "filled3", "filled4"];

//figure out continent thing
function display_text(e) {
	if (!e.target.id) return; //if click on a country w/o id or outside space
	let containsColour = check_colour(e.target.classList);
	if (containsColour===false) return; //returns if country isn't highlighted
	let textArray=e.target.id.split(' ').join('').toLowerCase()+"Text";
	let popupTxt= document.getElementById("outputtext");
	//theme global variable
	switch (theme) {
		//White to black
		case 'theme1':
			popupTxt.innerHTML=eval(textArray)[0];
			break;
		//Deities
		case 'theme2':
			popupTxt.innerHTML=eval(textArray)[1];
			break;
		//Death and Omen
		case 'theme3':
			popupTxt.innerHTML=eval(textArray)[2];
			break;
		//mischief n cunning
		case 'theme4':
			popupTxt.innerHTML=eval(textArray)[3];
			break;
		//Magical powers and supernatural eg. prophecy
		case 'theme5':
			popupTxt.innerHTML=eval(textArray)[4];
			break;
		//godhood and power
		case 'theme6':
			popupTxt.innerHTML=eval(textArray)[5];
			break;
		//Good fortune
		case 'theme7':
			popupTxt.innerHTML=eval(textArray)[6];
			break;

	}



}

function check_colour(countryClassList) {
	let containsColour = false;
	for (let i = 0; i < colourArray.length; i++) {
		if (countryClassList.contains(colourArray[i])) {
			containsColour = true;
		}
	}
	return containsColour;
}

//highlights countries according to theme, with variable colour
function highlight_theme(...args){
	args.forEach(function(item,index) {
		//dummy class needed in order for clear_map to work
		item.classList.add("filler");
		if (index%4===0) {
			item.classList.add("filled1");
		}
		else if (index%4===1) {
			item.classList.add("filled2");
		}
		else if (index%4===2) {
			item.classList.add("filled3");
		}
		else {
			item.classList.add("filled4");
		}

	})
	
}

function button_toggle(theme){
	//buttonList from eventListener
	for (let i=0; i< buttonList.length; i++) {
		buttonList[i].classList.remove("active");
	}
	document.getElementById(theme).classList.add("active");
}

function highlight_map(e){
	let filledCountriesList = document.getElementsByClassName("filler");
	if (filledCountriesList.length>0) {
		clear_map(filledCountriesList);
	}
	//theme global variable
	theme=this.id;
    switch (theme) {
		//White to black
		case 'theme1':
			highlight_theme(greece,roe,aus,farnorthame,ame,malay);
			break;
		//Deities
		case 'theme2':
			highlight_theme(greece,scandi,japan,china,uk,india);
			break;
		//Death and Omen
		case 'theme3':
			highlight_theme(saudi,uk,holy,roe,greece,sweden,denmark,ame);
			break;
		//mischief n cunning
		case 'theme4':
			highlight_theme(greece,ame,aus,russia);
			break;
		//Magical powers and supernatural eg. prophecy
		case 'theme5':
			highlight_theme(scandi,roe,ame,uk,greece,asia);
			break;
		//godhood and power
		case 'theme6':
			highlight_theme(ame,alaska,farnorthame,russia,japan,korea);
			break;
		//Good fortune
		case 'theme7':
			highlight_theme(holy,uk,china);
			break;
	}
	button_toggle(theme);
	add_class_to_child();
}

//adds fill class to child node of g, as long as child node doesn't already have class or isn't #text
function add_class_to_child() {
	const continentList=[asia,farnorthame,scandi];
	let colourContains='';
	for (let i=0;i<continentList.length;i++) {
		iterate_through(i);
		
	}

	//sees if continentList has been filled, then sees if child node has already been filled
	function iterate_through(i) {
		for (let j = 0; j < colourArray.length; j++) {
			if (continentList[i].classList.contains(colourArray[j])) {
				colourContains = colourArray[j];
				childNodes = continentList[i].childNodes;
				for (k = 0; k < childNodes.length; k++) {
					if (childNodes[k].nodeName !== "#text" ) {
						if (check_colour(childNodes[k].classList) === false){
							childNodes[k].classList.add(colourContains);
						}

					}
				}
			}
		}
	}
}

function clear_map(filledCountriesList){
	for (let i=0; i<filledCountriesList.length;i++) {
		//removes classes of child of g tags
		if(filledCountriesList[i].childNodes.length>0) {
			for (let j=0;j<filledCountriesList[i].childNodes.length;j++){
				if(filledCountriesList[i].childNodes[j].classList!==undefined) {
					filledCountriesList[i].childNodes[j].classList.remove("filled1","filled2","filled3","filled4");
				}
			}
		}
		filledCountriesList[i].classList.remove("filled1","filled2","filled3","filled4");
	}
}

//main program
const buttonList= document.getElementsByClassName("button");
for (let i=0; i< buttonList.length; i++) {
   buttonList[i].addEventListener('click',highlight_map);

}

const svgMap=document.querySelector("svg");
let theme='';
svgMap.addEventListener("click",display_text);


