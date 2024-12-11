document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".pics");
    const buttons = document.querySelectorAll(".titles");
    const overlay = document.getElementById("popup-overlay");
    const popupContent = document.getElementById("popup-content");
    const closePopup = document.getElementById("close-popup");

    // Informations sur les monuments
    const monumentInfo = {
        kremlin: {
            title: "Cathédrale Basile-le-Bienheureux",
            country: "Russie",
            description: "La cathédrale Basile-le-Bienheureux, située sur la place Rouge à Moscou, est un chef-d'œuvre de l'architecture russe. Construite au XVIe siècle sur ordre d'Ivan le Terrible pour célébrer une victoire militaire, elle se distingue par ses neuf chapelles surmontées de coupoles colorées et ornées. Son style unique, mélangeant influences byzantines et russes, en fait l'un des symboles les plus célèbres de la Russie. Aujourd'hui, elle est un musée et une attraction majeure de Moscou.",
            imgSrc: "./monuments/1.jpg"
        },
        petra: {
            title: "Porte de Pétra",
            country: "Jordanie",
            description: "La Porte de Pétra, ou Al-Siq, est un passage étroit et spectaculaire qui mène à la ville antique de Pétra, en Jordanie. Ce défilé de plusieurs centaines de mètres de long, entouré de falaises de grès rouge, était l'entrée principale de la ville nabatéenne. Au bout de la gorge se trouve le trésor de Pétra (Al-Khazneh), une célèbre façade sculptée dans la roche. La Porte de Pétra est un site impressionnant, à la fois naturel et historique, et elle représente un élément clé du patrimoine mondial de l'UNESCO.",
            imgSrc: "./monuments/2.jpg"
        },
        sagrada: {
            title: "Sagrada Família",
            country: "Espagne",
            description: "La Sagrada Família est une basilique emblématique située à Barcelone, en Espagne. Conçue par l'architecte Antoni Gaudí, sa construction a commencé en 1882 et est toujours en cours. Ce chef-d'œuvre du modernisme catalan est célèbre pour ses formes organiques, ses détails complexes et ses tours majestueuses. La basilique combine des éléments gothiques et Art Nouveau, et elle est classée au patrimoine mondial de l'UNESCO. La Sagrada Família est l'un des monuments les plus visités au monde et un symbole de la ville de Barcelone.",
            imgSrc: "./monuments/3.webp"
        },
        mahal: {
            title: "Taj Mahal",
            country: "Inde",
            description: "Le Taj Mahal est un mausolée emblématique situé à Agra, en Inde, et est considéré comme l'une des sept merveilles du monde. Il a été construit entre 1632 et 1653 par l'empereur moghol Shah Jahan en mémoire de sa femme Mumtaz Mahal, décédée en 1631. Ce monument en marbre blanc, orné de détails fins et entouré de jardins, de bassins et de mosquées, est un symbole de l'amour éternel. Le Taj Mahal est également inscrit au patrimoine mondial de l'UNESCO et attire des millions de visiteurs chaque année.",
            imgSrc: "./monuments/4.jpg"
        },
        castle: {
            title: "Neuschwanstein Castle",
            country: "Allemagne",
            description: "Le château de Neuschwanstein est un château romantique situé en Bavière, en Allemagne, près de Füssen. Construit au XIXe siècle par le roi Louis II de Bavière, il s'inspire des contes de fées et se distingue par son architecture spectaculaire, avec des tours, des ponts et des fenêtres majestueuses. Perché sur une colline, il offre une vue imprenable sur les montagnes environnantes et les forêts. Le château de Neuschwanstein est l'un des monuments les plus célèbres d'Allemagne et a inspiré le château de Disney dans les films d'animation.",
            imgSrc: "./monuments/5.webp"
        },
        luxembourg: {
            title: "Palais du Luxembourg",
            country: "France",
            description: "Le Palais du Luxembourg est un palais situé à Paris, en France, dans le 6e arrondissement, au cœur du quartier latin. Construit au début du XVIIe siècle pour la reine Marie de Médicis, il est aujourd'hui le siège du Sénat français. Le palais est entouré de magnifiques jardins à la française, ouverts au public, qui offrent un lieu de détente et de promenade. Le bâtiment lui-même est un exemple d'architecture classique, avec des façades élégantes et des sculptures décoratives. Le Palais du Luxembourg est également un site historique important et un symbole du pouvoir législatif en France.",
            imgSrc: "./monuments/6.jpg"
        },
        pearl: {
            title: "Oriental Pearl TV Tower",
            country: "Chine",
            description: "La tour de télévision Oriental Pearl TV Tower est un emblématique gratte-ciel situé à Shanghai, en Chine. Achevée en 1994, elle mesure 468 mètres de hauteur et est l'une des structures les plus reconnaissables de la ville. La tour se distingue par ses sphères futuristes qui semblent flotter à différentes hauteurs, symbolisant des perles. Elle abrite un observatoire, des restaurants tournants, un musée et un centre commercial. La Perle de l'Orient est un symbole du développement rapide de Shanghai et de la modernité de la Chine.",
            imgSrc: "./monuments/7.jpg"
        },
        cn_tower: {
            title: "CN Tower",
            country: "Canada",
            description: "La CN Tower est une tour emblématique située à Toronto, au Canada. Mesurant 553 mètres de hauteur, elle a été terminée en 1976 et a longtemps été la structure autoportante la plus haute du monde. Elle servait à initialement améliorer les communications, mais elle est aujourd'hui un site touristique majeur. La CN Tower dispose d'une plateforme d'observation offrant une vue panoramique de la ville et du lac Ontario. Le sol de la plateforme est en verre, ce qui permet aux visiteurs de voir la ville depuis des hauteurs vertigineuses. La tour est un symbole de Toronto et un incontournable pour les touristes.",
            imgSrc: "./monuments/8.jpg"
        },
        sphynx: {
            title: "Sphinx de Gizeh",
            country: "Égypte",
            description: "Le Sphinx de Gizeh est une gigantesque statue située sur le plateau de Gizeh, en Égypte, près des célèbres pyramides. Il représente une créature mythologique avec le corps d'un lion et la tête d'un pharaon, probablement celle du roi Khéphren, bien qu'il y ait des débats à ce sujet. Mesurant environ 73 mètres de long et 20 mètres de haut, le Sphinx est l'une des plus anciennes et des plus grandes statues monolithiques du monde. Il est un symbole emblématique de l'Égypte ancienne et attire des millions de visiteurs chaque année.",
            imgSrc: "./monuments/9.webp"
        },
        christ: {
            title: "Christ Rédempteur",
            country: "Brésil",
            description: "Le Christ Rédempteur est une célèbre statue située au sommet du mont Corcovado, à Rio de Janeiro, au Brésil. Haute de 38 mètres, cette statue en béton armé représente Jésus-Christ les bras ouverts, symbolisant l'accueil et la paix. Elle a été inaugurée en 1931 et est l'un des symboles les plus emblématiques du christianisme et de la ville de Rio de Janeiro. Le Christ Rédempteur est également inscrit au patrimoine mondial de l'UNESCO et fait partie des sept nouvelles merveilles du monde. La vue panoramique depuis le sommet est spectaculaire, attirant des millions de visiteurs chaque année.",
            imgSrc: "./monuments/10.webp"
        },
        bsm: {
            title: "Basilique Notre-Dame de l'Immaculée Conception",
            country: "France",
            description: "La Basilique Notre-Dame de l'Immaculée Conception, située à Boulogne-sur-Mer, en France, est un imposant édifice religieux construit au XIXe siècle. Cette basilique néogothique, inaugurée en 1854, se distingue par sa grande taille et sa magnifique architecture, avec une façade ornée de sculptures et de vitraux. Elle est dédiée à Notre-Dame de l'Immaculée Conception, patronne de la ville. Le bâtiment est réputé pour sa grande rosace et son intérieur impressionnant, ainsi que pour son rôle important dans la vie religieuse locale. La basilique offre également une vue panoramique sur Boulogne et la mer.",
            imgSrc: "./monuments/14.webp"
        },
        pdc: {
            title: "Place du Capitole",
            country: "France",
            description: "La Place du Capitole est la place centrale de la ville de Toulouse, en France. Elle est célèbre pour son architecture majestueuse et son rôle central dans la vie de la ville. La place est dominée par le bâtiment du Capitole, qui abrite la mairie de Toulouse et le théâtre du Capitole, un lieu culturel important. Le Capitole est un magnifique palais de style néoclassique, avec une façade imposante et des arcades. Entourée de cafés et de commerces, la Place du Capitole est un lieu de rencontre populaire et un symbole de la ville de Toulouse.",
            imgSrc: "./monuments/15.jpeg"
        },
        ae: {
            title: "Acropole d'Athènes",
            country: "Grèce",
            description: "L'Acropole d'Athènes et ses monuments sont le symbole universel de l'esprit et de la civilisation classiques, et forment le plus extraordinaire ensemble architectural et artistique légué par la Grèce antique au reste du monde. Dans la seconde moitié du Ve siècle avant JC, Athènes, suite à sa victoire sur les Perses et à l'établissement de la démocratie, prit un ascendant sur les autres Cités-États du monde antique. Durant cette période, alors que l'art et la pensée florissaient, un groupe exceptionnel d'artistes mit en œuvre les plans ambitieux de Périclès, homme d'État athénien, et transforma, sous la direction éclairée du sculpteur Phéidias, la colline rocheuse en un monument unique d'esprit et d'arts. Les principaux monuments furent érigés à cette époque : le Parthénon, construit par Ictinus, l'Érechthéion, les Propylées, l'entrée monumentale de l'Acropole, dessinés par Mnesiclès et le petit temple d'Athéna Nikê.",
            imgSrc: "./monuments/16.jpg"
        },
        opera: {
            title: "Opéra de Sydney",
            country: "Australie",
            description: "L'Opéra de Sydney est un bâtiment emblématique situé au bord du port de Sydney, en Australie. Conçu par l'architecte danois Jørn Utzon, il a été inauguré en 1973 et est reconnu pour son architecture unique, avec ses voiles blanches caractéristiques qui semblent flotter au-dessus du bâtiment. L'Opéra de Sydney est l'une des structures les plus reconnaissables au monde et un symbole de l'Australie. Il abrite plusieurs salles de spectacles, notamment pour l'opéra, le ballet et la musique symphonique. Classé au patrimoine mondial de l'UNESCO, il attire des millions de visiteurs chaque année.",
            imgSrc: "./monuments/17.jpg"
        },
        pdb: {
            title: "Porte de Brandebourg",
            country: "Allemagne",
            description: "La Porte de Brandebourg est un monument emblématique situé à Berlin, en Allemagne. Construite entre 1788 et 1791 dans un style néoclassique, elle représente un symbole de l'unité et de la paix. La porte, qui mesure 26 mètres de haut et 65 mètres de large, était à l'origine un portail d'entrée dans la ville et servait de porte d'accès aux citoyens. Elle est ornée de la célèbre statue de la déesse de la victoire, la Quadriga, qui se trouve au sommet de la structure. La Porte de Brandebourg est un symbole majeur de l'histoire de l'Allemagne, ayant été témoin de nombreux événements historiques, y compris la division et la réunification de Berlin.",
            imgSrc: "./monuments/18.jpg"
        },
        adtc: {
            title: "Armée de terre cuite",
            country: "Chine",
            description: "L'Armée de terre cuite est un ensemble de sculptures découvertes en 1974 près de la ville de Xi'an, en Chine. Ces statues représentent une armée de soldats, de chevaux et de chariots, créées pour accompagner le premier empereur de Chine, Qin Shi Huang, dans l'au-delà. L'armée comprend plus de 8 000 statues de soldats à taille réelle, chacune ayant des traits et des postures uniques, ce qui témoigne du niveau de détail et de l'ingéniosité de l'époque. Ces statues étaient destinées à protéger l'empereur dans l'après-vie. L'Armée de terre cuite est l'un des plus grands sites archéologiques du monde et fait partie du patrimoine mondial de l'UNESCO.",
            imgSrc: "./monuments/20.jpg"
        },
        gdl: {
            title: "Grotte de Lascaux",
            country: "France",
            description: "La grotte de Lascaux est un site préhistorique situé dans le sud-ouest de la France, célèbre pour ses peintures rupestres vieilles de près de 20 000 ans. Découverte en 1940, la grotte abrite des centaines de peintures représentant principalement des animaux tels que des bisons, des cerfs, des chevaux et des aurochs. Ces œuvres d'art, réalisées avec des pigments naturels, sont remarquablement bien conservées et offrent un aperçu fascinant de la culture et des croyances des premiers humains. En raison des risques de dégradation causés par l'humidité et les visiteurs, l'accès à la grotte originale est désormais interdit, mais une réplique est ouverte au public. La grotte de Lascaux est inscrite au patrimoine mondial de l'UNESCO.",
            imgSrc: "./monuments/21.jpg"
        },
        ggb: {
            title: "Golden Gate Bridge",
            country: "États-Unis",
            description: "Le Golden Gate Bridge est un pont suspendu emblématique situé à San Francisco, en Californie, aux États-Unis. Inauguré en 1937, il traverse le détroit du Golden Gate, qui sépare la baie de San Francisco de l'océan Pacifique. Avec ses célèbres câbles rouges et sa structure imposante, il mesure 2 737 mètres de long et est l'un des ponts les plus photographiés et reconnus au monde. Le Golden Gate Bridge est un symbole de la ville de San Francisco et un exploit d'ingénierie pour son époque, étant considéré comme un chef-d'œuvre du modernisme.",
            imgSrc: "./monuments/23.webp"
        },
        pdl: {
            title: "Pyramide du Louvre",
            country: "France",
            description: "La Pyramide du Louvre est une grande structure en verre située dans la cour Napoléon du musée du Louvre à Paris, France. Inaugurée en 1989, elle a été conçue par l'architecte Ieoh Ming Pei. La pyramide mesure 35,4 mètres de côté et 35,4 mètres de hauteur, et sert d'entrée principale au musée. Avec ses panneaux de verre transparents et son cadre en métal, elle offre une contrastante modernité par rapport à l'architecture classique du musée. La pyramide est rapidement devenue un symbole du Louvre et de Paris, attirant des millions de visiteurs chaque année.",
            imgSrc: "./monuments/24.jpg"
        },
        idp: {
            title: "L'Île de Pâques",
            country: "Chili",
            description: "L'Île de Pâques, ou Rapa Nui, est une île isolée située dans l'océan Pacifique, à plus de 3 500 km de la côte chilienne. Elle est célèbre pour ses statues monumentales appelées moai, qui représentent des ancêtres déifiés. Ces statues en pierre, qui peuvent atteindre plusieurs mètres de hauteur, ont été sculptées par les habitants polynésiens entre les XIIe et XVIIe siècles. L'île, d'une superficie d'environ 160 km², est un site inscrit au patrimoine mondial de l'UNESCO. En plus des moai, l'Île de Pâques possède une histoire fascinante liée à ses habitants, leur culture et les mystères entourant la disparition de leur civilisation ancienne.",
            imgSrc: "./monuments/25.jpg"
        },
        te: {
            title: "Tour Eiffel",
            country: "France",
            description: "La Tour Eiffel est un monument emblématique situé à Paris, en France, et l'un des sites les plus célèbres au monde. Conçue par l'ingénieur Gustave Eiffel, elle a été inaugurée en 1889 pour l'Exposition universelle, célébrant le centenaire de la Révolution française. Haute de 330 mètres, la tour est construite en fer puddlé et était la structure la plus haute du monde à son achèvement. Composée de trois étages accessibles au public, elle offre une vue panoramique spectaculaire sur Paris. Symbole de l'innovation et de l'élégance française, la Tour Eiffel attire chaque année des millions de visiteurs venus des quatre coins du globe.",
            imgSrc: "./monuments/26.jpeg"
        },
        tdp: {
            title: "Tour de Pise",
            country: "Italie",
            description: "La Tour de Pise, ou Torre di Pisa, est un célèbre clocher situé à Pise, en Italie. Construit entre le XIIe et le XIVe siècle, il fait partie d'un complexe architectural appelé la Piazza dei Miracoli, qui comprend également la cathédrale et le baptistère. La tour est mondialement connue pour son inclinaison caractéristique, due à un affaissement du sol sous ses fondations. Mesurant environ 56 mètres de haut, elle est composée de huit étages en marbre blanc, ornés d'arches et de colonnes. Bien que sa pente ait été stabilisée par des travaux modernes, elle reste une attraction touristique majeure et un symbole de l'ingéniosité architecturale médiévale.",
            imgSrc: "./monuments/27.jpg"
        },
        bu: {
            title: "Butrint",
            country: "Albanie",
            description: "Butrint est un site archéologique situé dans le sud de l'Albanie, près de la mer Ionienne. Inscrit au patrimoine mondial de l'UNESCO, il est connu pour ses vestiges qui témoignent de plusieurs civilisations, notamment grecque, romaine, byzantine et vénitienne. Fondée au VIIe siècle avant J.-C., la ville antique de Butrint était un centre important de commerce et de culture. Parmi ses attractions principales figurent un théâtre grec, des bains romains, une basilique paléochrétienne et une citadelle médiévale. Le site est entouré de paysages naturels magnifiques, avec un lac voisin et une biodiversité riche. Butrint est une destination incontournable pour les passionnés d'histoire et de nature.",
            imgSrc: "./monuments/28.webp"
        },
        nst: {
            title: "N Seoul Tower",
            country: "Corée du Sud",
            description: "La N Seoul Tower, située sur le mont Namsan à Séoul, en Corée du Sud, est un observatoire emblématique offrant une vue panoramique spectaculaire sur la ville. Inaugurée en 1969 comme tour de communication, elle est aujourd'hui un lieu touristique populaire. La tour est illuminée la nuit, créant un spectacle lumineux unique, et dispose de plateformes d'observation, de restaurants et d'un espace pour des 'cadenas d'amour' laissés par les visiteurs. La N Seoul Tower est un symbole de la modernité et de l'innovation de Séoul.",
            imgSrc: "./monuments/29.avif"
        },
        gm: {
            title: "La Grande Muraille",
            country: "Chine",
            description: "La Grande Muraille de Chine est un ensemble impressionnant de fortifications construit entre le IIIe siècle avant J.-C. et le XVIIe siècle pour protéger la Chine des invasions. S'étendant sur environ 21 000 kilomètres, elle traverse montagnes, déserts et plaines, reliant plusieurs sections bâties sous différentes dynasties, notamment les Qin, les Han et les Ming. La muraille est faite principalement de pierre, de brique et de terre battue, et elle comprend des tours de guet, des bastions et des chemins pour les patrouilles militaires. Symbole emblématique de l'ingéniosité et de la ténacité chinoises, elle est inscrite au patrimoine mondial de l'UNESCO et constitue l'un des monuments les plus visités au monde. Elle est parfois surnommée 'le long dragon'.",
            imgSrc: "./monuments/30.jpg"
        },
        pdg: {
            title: "Pyramides de Gizeh",
            country: "Égypte",
            description: "Les pyramides de Gizeh, situées près du Caire, en Égypte, sont des monuments emblématiques de l'Antiquité, construits il y a plus de 4 500 ans pour les pharaons Khéops, Khéphren et Mykérinos. Ces gigantesques tombes, réalisées avec une précision impressionnante, témoignent de l'ingéniosité et de l'organisation des anciens Égyptiens. Dominées par la grande pyramide de Khéops, l'une des sept merveilles du monde antique, elles sont entourées d'autres structures, dont le Sphinx, qui veille majestueusement sur le site. Les pyramides de Gizeh, classées au patrimoine mondial de l'UNESCO, attirent chaque année des millions de visiteurs fascinés par leur grandeur et leur mystère.",
            imgSrc: "./monuments/32.jpg"
        },
        ldn: {
            title: "Lignes de Nazca",
            country: "Pérou",
            description: "Les lignes de Nazca sont un ensemble de géoglyphes gigantesques tracés sur le sol désertique du sud du Pérou entre 500 av. J.-C. et 500 apr. J.-C. Ces motifs, représentant des formes animales, végétales et géométriques, sont visibles uniquement depuis le ciel ou les hauteurs. Créés par la civilisation Nazca, ils sont encore entourés de mystère quant à leur signification, bien que l'on suppose qu'ils aient eu des fonctions rituelles ou astronomiques. Inscrites au patrimoine mondial de l'UNESCO, les lignes de Nazca continuent de captiver les visiteurs par leur échelle et leur précision extraordinaires.",
            imgSrc: "./monuments/33.jpg"
        },
        man: {
            title: "Manneken Pis",
            country: "Belgique",
            description: "Le Manneken Pis est une petite statue-fontaine en bronze située dans le centre de Bruxelles, en Belgique. Représentant un garçon en train d'uriner, cette sculpture de 61 cm, réalisée au XVIIe siècle par Jérôme Duquesnoy l'Ancien, est devenue un symbole de l'humour et de l'esprit libre bruxellois. Le Manneken Pis est souvent habillé de costumes variés pour des occasions spéciales, une tradition qui contribue à son charme. Malgré sa petite taille, il est l'un des monuments les plus célèbres de Bruxelles, attirant des millions de visiteurs chaque année.",
            imgSrc: "./monuments/41.jpg"
        },
        mp: {
            title: "Machu Picchu",
            country: "Pérou",
            description: "Le Machu Picchu est une ancienne cité inca située dans les Andes péruviennes, à 2 430 mètres d'altitude. Construite au XVe siècle sous l'empereur Pachacútec, cette cité mystérieuse est un chef-d'œuvre architectural, avec ses terrasses, temples et aqueducs parfaitement intégrés dans le paysage montagneux. Redécouvert en 1911, le Machu Picchu est considéré comme un lieu sacré et une prouesse technique des Incas. Inscrit au patrimoine mondial de l'UNESCO, il est l'une des sept nouvelles merveilles du monde et une destination emblématique pour les amateurs d'histoire et de nature.",
            imgSrc: "./monuments/34.jpg"
        },
        scs: {
            title: "Cercles mégalithiques de Sénégambie",
            country: "Sénégal",
            description: "Les cercles mégalithiques de Sénégambie sont un ensemble de plus de 1 000 structures circulaires en pierre situées entre le Sénégal et la Gambie. Construits entre le IIIe siècle av. J.-C. et le XVIe siècle, ils sont considérés comme les plus grands complexes mégalithiques d'Afrique. Ces cercles, souvent associés à des tumulus funéraires, témoignent des pratiques sociales, culturelles et spirituelles des sociétés anciennes de la région. Inscrits au patrimoine mondial de l'UNESCO, ces sites intriguent par leur complexité et leur rôle dans l'histoire de l'Afrique de l'Ouest.",
            imgSrc: "./monuments/35.jpg"
        },
        bb: {
            title: "Big Ben",
            country: "Royaume-Uni",
            description: "Big Ben est l'emblématique horloge de la tour Elizabeth, située au Palais de Westminster à Londres, au Royaume-Uni. Achevée en 1859, la tour mesure 96 mètres de haut et abrite une horloge de précision ainsi que la célèbre cloche de 13,7 tonnes surnommée 'Big Ben'. Ce monument est un symbole de Londres et de la démocratie britannique, attirant chaque année des millions de visiteurs du monde entier.",
            imgSrc: "./monuments/36.jpg"
        },
        th: {
            title: "Tour d'Hercule",
            country: "Espagne",
            description: "La Tour d'Hercule est un phare historique situé près de La Corogne, en Galice, au nord-ouest de l'Espagne. Construite par les Romains au Ier siècle, elle est le plus ancien phare encore en fonctionnement au monde. Haute de 55 mètres, la tour offre une vue imprenable sur l'océan Atlantique. Inscrite au patrimoine mondial de l'UNESCO, elle est un symbole de l'ingéniosité romaine et une attraction majeure pour les visiteurs intéressés par l'histoire maritime.",
            imgSrc: "./monuments/37.jpg"
        },
        drd: {
            title: "Domaine royal de Drottningholm",
            country: "Suède",
            description: "Le Domaine royal de Drottningholm, situé sur l'île de Lovön près de Stockholm, en Suède, est une résidence royale et un site inscrit au patrimoine mondial de l'UNESCO. Construit au XVIIe siècle, ce palais somptueux est inspiré des châteaux français, notamment de Versailles, et est entouré de magnifiques jardins à la française et à l'anglaise. Le domaine comprend également un théâtre du XVIIIe siècle parfaitement conservé et le pavillon chinois. Résidence privée de la famille royale suédoise, Drottningholm est une attraction majeure, appréciée pour son architecture élégante et son cadre paisible.",
            imgSrc: "./monuments/38.jpg"
        },
        dev: {
            title: "Vallée de l'Elbe à Dresde",
            country: "Allemagne",
            description: "La Vallée de l'Elbe à Dresde, en Allemagne, était un site culturel inscrit au patrimoine mondial de l'UNESCO de 2004 à 2009. Cette vallée, longue de 18 km, traversait la ville de Dresde et était appréciée pour son paysage harmonieux combinant monuments historiques, architecture baroque et nature. Elle comprenait des sites emblématiques comme l'Opéra Semper, la Frauenkirche et les rives verdoyantes de l'Elbe. Cependant, en 2009, le site a été retiré de la liste de l'UNESCO en raison de la construction controversée du pont de Waldschlösschen, qui a été jugé incompatible avec la préservation de son intégrité paysagère et culturelle.",
            imgSrc: "./monuments/39.jpg"
        },
        at: {
            title: "Atomium",
            country: "Belgique",
            description: "L'Atomium est un monument emblématique situé à Bruxelles, en Belgique. Construit pour l'Exposition universelle de 1958 (Expo 58), il représente un cristal de fer agrandi 165 milliards de fois. Haut de 102 mètres, il se compose de neuf sphères en acier inoxydable reliées par des tubes, symbolisant à la fois les progrès scientifiques et l'optimisme d'après-guerre. L'Atomium abrite aujourd'hui des expositions, des espaces culturels, et une sphère panoramique offrant une vue spectaculaire sur Bruxelles. C'est l'un des sites les plus visités et reconnaissables de la capitale belge.",
            imgSrc: "./monuments/40.jpg"
        },
        adt: {
            title: "Arc de Triomphe",
            country: "France",
            description: "L'Arc de Triomphe, situé à Paris au sommet des Champs-Élysées, est un monument commandé par Napoléon pour célébrer les victoires de son armée. Inauguré en 1836, il est décoré de sculptures relatant des moments clés de l'histoire militaire française. Sous l'arc repose la tombe du Soldat inconnu, honorée par une flamme éternelle depuis 1921. C'est un symbole fort de l'histoire nationale et un point de vue exceptionnel sur Paris.",
            imgSrc: "./monuments/42.jpg"
        },
        pra: {
            title: "Palais royal d'Amsterdam",
            country: "Pays-Bas",
            description: "Le Palais royal d'Amsterdam est un bâtiment historique situé sur la place du Dam, au cœur d'Amsterdam. Construit au XVIIe siècle comme hôtel de ville, il est devenu la résidence officielle de la famille royale néerlandaise. Avec son architecture impressionnante de style classique, il abrite aujourd'hui des salles somptueuses ouvertes au public, tout en servant de lieu pour des événements officiels. Le palais est un symbole du pouvoir royal et de l'histoire de la ville.",
            imgSrc: "./monuments/43.jpg"
        },
        pc: {
            title: "Pont Charles",
            country: "République-Tchèque",
            description: "Le Pont Charles, situé à Prague, en République tchèque, est un pont historique datant du XIVe siècle. Reliant la vieille ville au quartier du château, il est célèbre pour ses 30 statues baroques représentant des saints. Le pont, en pierre, mesure 516 mètres de long et est un lieu emblématique de Prague, attirant de nombreux visiteurs grâce à son architecture et sa vue sur la Vltava et le château de Prague.",
            imgSrc: "./monuments/44.jpg"
        },
        si: {
            title: "Sintra",
            country: "Portugal",
            description: "Sintra est une ville pittoresque située près de Lisbonne, au Portugal, célèbre pour ses palais, châteaux et jardins. Classée au patrimoine mondial de l'UNESCO, elle abrite des sites remarquables tels que le Palais national de Pena, le Château des Maures et la Quinta da Regaleira. Entourée de collines verdoyantes, Sintra est un lieu de conte de fées, alliant histoire, architecture et nature.",
            imgSrc: "./monuments/45.jpg"
        },
        csmdf: {
            title: "Cathédrale Santa Maria Del Fiore",
            country: "Italie",
            description: "La cathédrale Santa Maria del Fiore, également connue sous le nom de Duomo de Florence, est un chef-d'œuvre de l'architecture gothique située à Florence, en Italie. Sa célèbre coupole, conçue par Filippo Brunelleschi, est un exploit d'ingénierie. Construite entre le XIIIe et le XVe siècle, la cathédrale est ornée de magnifiques fresques et d'une façade en marbre. Elle reste l'une des plus grandes églises du monde et un symbole emblématique de la Renaissance italienne.",
            imgSrc: "./monuments/46.jpg"
        },
        tikal: {
            title: "Tikal",
            country: "Guatemala",
            description: "Tikal est un site archéologique majeur situé dans la jungle du Guatemala. Ancienne cité de la civilisation maya, elle fut l'une des plus grandes et influentes entre 200 av. J.-C. et 900 ap. J.-C. Tikal est célèbre pour ses pyramides imposantes, comme le Temple du Grand Jaguar, ses places centrales et ses sculptures. Classée au patrimoine mondial de l'UNESCO, elle est un symbole important de l'héritage maya et un lieu prisé par les passionnés d'histoire et d'archéologie.",
            imgSrc: "./monuments/47.jpg"
        },
        sh: {
            title: "Stonehenge",
            country: "Angleterre",
            description: "Stonehenge est un monument préhistorique situé en Angleterre, composé de grandes pierres disposées en cercles. Datant d'environ 3 000 à 2 000 av. J.-C., il est l'un des sites archéologiques les plus célèbres au monde. Son but reste mystérieux, mais il est souvent associé à des rituels religieux et astronomiques, en particulier avec les solstices. Stonehenge est un symbole puissant de l'ingéniosité et des croyances des civilisations anciennes.",
            imgSrc: "./monuments/48.jpg"
        },
        ci: {
            title: "Chichén Itzá",
            country: "Mexique",
            description: "Chichén Itzá est un ancien site maya situé dans la péninsule du Yucatán, au Mexique. Fondé vers 600 ap. J.-C., il est devenu l'une des plus grandes cités de la civilisation maya. Le site est célèbre pour sa pyramide emblématique, El Castillo, dédiée au dieu Kukulkán, ainsi que pour ses autres structures, comme le Temple des Guerriers et le terrain de jeu de balle. Classé au patrimoine mondial de l'UNESCO, Chichén Itzá est un symbole de la grandeur de la civilisation maya.",
            imgSrc: "./monuments/49.jpg"
        },
        pb: {
            title: "Parlement de Budapest",
            country: "Hongrie",
            description: "Le Parlement de Budapest, situé sur les rives du Danube en Hongrie, est l'un des plus grands et des plus impressionnants bâtiments parlementaires d'Europe. Construit entre 1885 et 1904, il mêle des styles architecturaux néo-gothique et Renaissance, avec une façade ornée et un dôme majestueux. Il abrite l'Assemblée nationale hongroise et contient des salles richement décorées. Ce monument emblématique de Budapest est un symbole de la Hongrie et une attraction majeure pour les visiteurs.",
            imgSrc: "./monuments/50.jpg"
        },
        mcz: {
            title: "Mosquée Cheikh Zayed",
            country: "Émirats arabes unis",
            description: "La mosquée Cheikh Zayed, située à Abu Dhabi, aux Émirats arabes unis, est l'une des plus grandes mosquées du monde. Achevée en 2007, elle est un chef-d'œuvre d'architecture islamique, alliant des éléments traditionnels et modernes. Elle est ornée de somptueux tapis, de marbres et de cristaux, et possède l'une des plus grandes coupoles du monde. La mosquée, ouverte aux visiteurs, est un symbole de tolérance, d'unité et de culture dans la région.",
            imgSrc: "./monuments/51.jpg"
        },
        gdt: {
            title: "Grottes de Batu",
            country: "Malaisie",
            description: "Les grottes de Batu, situées près de Kuala Lumpur, en Malaisie, sont un complexe de grottes calcaires qui abritent un temple hindou dédié au dieu Murugan. La plus grande grotte, appelée Temple Cave, est accessible par un escalier de 272 marches. Les grottes sont un site religieux majeur et un lieu de pèlerinage, attirant chaque année des milliers de visiteurs, notamment lors du festival Thaipusam. Les grottes sont également célèbres pour leurs statues imposantes et leur environnement naturel spectaculaire.",
            imgSrc: "./monuments/52.jpg"
        },
        co: {
            title: "Colisée",
            country: "Italie",
            description: "Le Colisée, situé à Rome, en Italie, est un amphithéâtre emblématique construit au Ier siècle sous les empereurs Vespasien et Titus. Capable d'accueillir jusqu'à 50 000 spectateurs, il servait à des combats de gladiateurs et à d'autres spectacles publics. Ce monument impressionnant, en grande partie en ruines aujourd'hui, est un symbole de l'ingéniosité romaine et de l'histoire de l'Empire romain. Le Colisée est l'une des attractions les plus célèbres de Rome et un site classé au patrimoine mondial de l'UNESCO.",
            imgSrc: "./monuments/53.png"
        },
        ad: {
            title: "Arche de la Défense",
            country: "France",
            description: "L'Arche de la Défense, située à Paris, est un monument moderne qui symbolise la victoire et la grandeur de la France. Achevée en 1989, elle est un cube géant de 110 mètres de haut, 110 mètres de large et 35 mètres de profondeur, conçu par l'architecte Johan Otto von Spreckelsen. Située à l'extrémité de l'axe historique de Paris, elle offre une vue spectaculaire sur la ville et abrite des bureaux et des espaces d'exposition. C'est un symbole de l'architecture contemporaine et un lieu emblématique du quartier d'affaires de La Défense.",
            imgSrc: "./monuments/54.jpeg"
        },
        sol: {
            title: "Statue de la Liberté",
            country: "États-Unis",
            description: "La Statue de la Liberté, située sur l'île de la Liberté à New York, est un cadeau de la France aux États-Unis, inauguré en 1886. Conçue par le sculpteur Frédéric Auguste Bartholdi et symbolisant la liberté, elle représente une femme tenant une torche dans une main et une tablette dans l'autre. Haute de 93 mètres, la statue est devenue un symbole mondial de la liberté, de l'indépendance et de l'espoir pour des millions d'immigrants arrivant en Amérique. C'est l'un des monuments les plus emblématiques au monde.",
            imgSrc: "./monuments/55.jpg"
        },
        sg: {
            title: "Supertree Grove",
            country: "Singapour",
            description: "Les Supertree Grove sont des structures futuristes situées dans le jardin de la baie à Singapour. Ces arbres artificiels, qui mesurent jusqu'à 50 mètres de haut, sont recouverts de plantes grimpantes et abritent des jardins verticaux. Conçus pour capter l'énergie solaire et améliorer l'efficacité énergétique, ils servent aussi de structures pour des spectacles lumineux. Les Supertree Grove sont une attraction populaire, représentant l'innovation en matière d'architecture durable et de jardinage urbain.",
            imgSrc: "./monuments/56.jpg"
        },
        cin: {
            title: "Cité Interdite",
            country: "Chine",
            description: "La Cité Interdite, située à Pékin, en Chine, est un ancien palais impérial qui servait de résidence aux empereurs chinois pendant près de 500 ans. Construite au XVe siècle sous la dynastie Ming, elle est composée de près de 1 000 bâtiments et est entourée d'un large fossé et de murailles. Ce complexe monumental, inscrit au patrimoine mondial de l'UNESCO, est un exemple exceptionnel de l'architecture impériale chinoise et abrite aujourd'hui le Musée du Palais, attirant des millions de visiteurs chaque année.",
            imgSrc: "./monuments/57.jpg"
        },
        ts: {
            title: "Tokyo Skytree",
            country: "Japon",
            description: "La Tokyo Skytree est une tour de communication et d'observation située à Tokyo, au Japon. Inaugurée en 2012, elle mesure 634 mètres de hauteur, ce qui en fait la plus haute structure du Japon et l'une des plus hautes du monde. La Skytree offre des vues spectaculaires de Tokyo depuis ses plateformes d'observation et abrite également des restaurants, des magasins et un musée. Ce symbole moderne de la ville combine technologie de pointe et architecture contemporaine.",
            imgSrc: "./monuments/58.jpg"
        },
        esb: {
            title: "Empire State Building",
            country: "États-Unis",
            description: "L'Empire State Building, situé à New York, est un gratte-ciel emblématique achevé en 1931. Haut de 381 mètres (443 mètres avec son antenne), il a été le plus haut bâtiment du monde pendant près de 40 ans. Ce chef-d'œuvre Art déco est célèbre pour ses plateformes d'observation offrant une vue panoramique sur la ville. Symbole de l'ingéniosité américaine, il est l'un des monuments les plus visités et reconnaissables au monde.",
            imgSrc: "./monuments/59.avif"
        },
        bk: {
            title: "Burj Khalifa",
            country: "Émirats arabes unis",
            description: "Le Burj Khalifa, situé à Dubaï, aux Émirats arabes unis, est le plus haut gratte-ciel du monde, culminant à 828 mètres. Inauguré en 2010, il est un chef-d'œuvre d'ingénierie moderne et d'architecture. Le bâtiment abrite des bureaux, des résidences luxueuses, des hôtels et des plateformes d'observation offrant des vues spectaculaires sur Dubaï. Le Burj Khalifa est un symbole de l'ambition et de l'innovation de la ville.",
            imgSrc: "./monuments/60.webp"
        },
        tas: {
            title: "Temples d'Abou Simbel",
            country: "Égypte",
            description: "Les temples d'Abou Simbel, situés en Égypte près du lac Nasser, sont deux temples monumentaux taillés dans la roche sous le règne de Ramsès II au XIIIe siècle av. J.-C. Le grand temple est dédié à Ramsès II et aux dieux Ra, Amon et Ptah, tandis que le petit temple honore son épouse Néfertari. Ces temples impressionnants, ornés de colosses et de fresques, ont été déplacés dans les années 1960 pour éviter qu'ils ne soient submergés lors de la construction du barrage d'Assouan. Ils sont aujourd'hui classés au patrimoine mondial de l'UNESCO.",
            imgSrc: "./monuments/61.jpg"
        },
        prb: {
            title: "Palais Royal de Bangkok",
            country: "Thaïlande",
            description: "Le Palais Royal de Bangkok, ou Grand Palais, est un complexe monumental situé au cœur de Bangkok, en Thaïlande. Construit en 1782, il fut la résidence des rois de Thaïlande pendant plus de 150 ans. Le palais abrite des bâtiments aux toits dorés et richement décorés, notamment le Wat Phra Kaew, qui renferme le célèbre Bouddha d'émeraude. Symbole de l'histoire et de la culture thaïlandaise, il est aujourd'hui un site incontournable et un lieu de cérémonies royales.",
            imgSrc: "./monuments/62.jpg"
        },
        bo: {
            title: "Bodnath",
            country: "Népal",
            description: "Bodnath, ou Boudhanath, est un immense stupa bouddhiste situé à Katmandou, au Népal. Classé au patrimoine mondial de l'UNESCO, il est l'un des plus grands et des plus sacrés au monde. Construit au XIVe siècle, le stupa est célèbre pour son dôme blanc, ses yeux peints symbolisant la vigilance de Bouddha, et ses prières tibétaines qui résonnent dans l'air. C'est un centre spirituel majeur pour les bouddhistes et une attraction incontournable pour les visiteurs.",
            imgSrc: "./monuments/63.jpg"
        },
        ft: {
            title: "Fontaine de Trevi",
            country: "Italie",
            description: "La fontaine de Trevi, située à Rome, en Italie, est une œuvre baroque emblématique achevée en 1762. Elle représente Neptune, dieu de la mer, entouré de figures symbolisant l'abondance et la santé. Connue pour sa grandeur et sa beauté, elle attire des millions de visiteurs chaque année, qui y jettent des pièces en faisant un vœu. La fontaine est un symbole romantique et culturel de Rome.",
            imgSrc: "./monuments/64.jpg"
        },
        pp: {
            title: "Palais du Potala",
            country: "Tibet",
            description: "Le Palais du Potala, situé à Lhassa, au Tibet, est une ancienne résidence des dalaï-lamas et un symbole du bouddhisme tibétain. Construit au VIIe siècle et agrandi au XVIIe, il se dresse majestueusement sur une colline, culminant à 3 700 mètres d'altitude. Avec ses milliers de pièces abritant des reliques, des chapelles et des fresques, il est inscrit au patrimoine mondial de l'UNESCO et incarne la richesse spirituelle et culturelle du Tibet.",
            imgSrc: "./monuments/65.jpg"
        },
        bsp: {
            title: "Basilique Saint Pierre",
            country: "Vatican",
            description: "La basilique Saint-Pierre, située au Vatican à Rome, est l'un des édifices religieux les plus célèbres au monde. Construite entre le XVIe et le XVIIe siècle, elle est un chef-d'œuvre de la Renaissance, conçu par des architectes tels que Michel-Ange, Bramante et Bernin. Sa coupole massive domine l'horizon de Rome, tandis que son intérieur abrite des trésors artistiques, notamment la **Pietà** de Michel-Ange. Lieu de pèlerinage majeur, c'est le centre spirituel du catholicisme et le site des grandes célébrations papales.",
            imgSrc: "./monuments/66.jpg"
        },
        gye: {
            title: "Gyeongbokgung",
            country: "Corée du Sud",
            description: "Le palais Gyeongbokgung, situé à Séoul en Corée du Sud, est le plus grand et le plus ancien des « Cinq Grands Palais » construits sous la dynastie Joseon. Érigé en 1395, il servait de résidence royale et de centre administratif. Le palais est célèbre pour son architecture harmonieuse, ses pavillons élégants et ses jardins paisibles, avec en toile de fond le mont Bugaksan. Restauré après avoir subi des destructions, Gyeongbokgung est aujourd'hui un symbole de l'histoire coréenne et une attraction incontournable.",
            imgSrc: "./monuments/67.jpg"
        },
        ge: {
            title: "Grottes d'Ellora",
            country: "Inde",
            description: "Les grottes d'Ellora, situées dans l'État du Maharashtra en Inde, sont un complexe impressionnant de temples et de monastères taillés dans la roche. Datant entre le 6e et le 10e siècle, elles comprennent 34 grottes, dont 12 bouddhistes, 17 hindoues et 5 jaïnes, représentant l'union de diverses religions. La grotte 16, avec son temple monumental de Kailasa, est particulièrement remarquable. Classées au patrimoine mondial de l'UNESCO, ces grottes sont un témoignage exceptionnel de l'architecture et de la sculpture indiennes anciennes.",
            imgSrc: "./monuments/68.jpg"
        },
        ddm: {
            title: "Duomo de Milan",
            country: "Italie",
            description: "Le Duomo de Milan est la cathédrale emblématique de la ville, située sur la célèbre place du Duomo. Construite entre le XIVe et le XIXe siècle, elle est un chef-d'œuvre de l'architecture gothique, avec sa façade ornée de statues et ses flèches pointant vers le ciel. La cathédrale est réputée pour ses vitraux magnifiques et ses impressionnantes vues depuis le toit, où les visiteurs peuvent admirer Milan et ses environs. C'est l'une des plus grandes cathédrales d'Europe et un symbole de l'art et de la culture italienne.",
            imgSrc: "./monuments/69.jpg"
        },
        mb: {
            title: "Mosquée Bleue",
            country: "Turquie",
            description: "La Mosquée Bleue, située à Istanbul, en Turquie, est l'un des monuments les plus célèbres du monde islamique. Construite au XVIIe siècle sous le sultan Ahmet Ier, elle est connue pour ses six minarets et son intérieur décoré de milliers de carreaux de faïence bleue, d'où elle tire son nom. Mélangeant des éléments de l'architecture ottomane et byzantine, elle reste un lieu de culte actif tout en étant une grande attraction touristique. La Mosquée Bleue est un symbole important de l'Islam et de l'histoire d'Istanbul.",
            imgSrc: "./monuments/70.avif"
        },
        cc: {
            title: "Cathédrale de Cologne",
            country: "Allemagne",
            description: "La cathédrale de Cologne, située en Allemagne, est un chef-d'œuvre de l'architecture gothique. Construite entre 1248 et 1880, elle est l'une des plus grandes cathédrales d'Europe et un symbole majeur de la ville. Son impressionnant façade, ornée de statues et de vitraux, abrite la relique des Rois Mages. Avec ses flèches culminant à 157 mètres, elle domine le paysage urbain. Classée au patrimoine mondial de l'UNESCO, la cathédrale de Cologne attire des millions de visiteurs chaque année.",
            imgSrc: "./monuments/71.jpeg"
        },
        to: {
            title: "Tombouctou",
            country: "Mali",
            description: "Tombouctou, située au Mali, est une ancienne ville légendaire, connue pour son rôle clé dans le commerce transsaharien et son patrimoine culturel. Fondée au XIe siècle, elle devint un centre intellectuel et religieux majeur, notamment grâce à ses mosquées et à sa célèbre université islamique. Tombouctou abrite des manuscrits anciens et des bâtiments historiques, dont la mosquée de Djingareyber, classée au patrimoine mondial de l'UNESCO. C'est un symbole de l'Afrique médiévale, bien que la ville ait souffert de l'instabilité régionale ces dernières décennies.",
            imgSrc: "./monuments/72.jpg"
        },
        ag: {
            title: "Alhambra de Grenade",
            country: "Espagne",
            description: "L'Alhambra de Grenade, en Espagne, est un palais fortifié emblématique de l'architecture islamique. Construite au XIIIe siècle sous la dynastie nasride, elle combine des éléments de forteresse, de palais royal et de jardins. Ses magnifiques cours, ses fontaines, ses mosaïques détaillées et ses arches élégantes en font l'un des plus beaux exemples de l'art islamique en Europe. Inscrite au patrimoine mondial de l'UNESCO, l'Alhambra reste un symbole de l'héritage mauresque de l'Espagne et attire des millions de visiteurs chaque année.",
            imgSrc: "./monuments/73.jpg"
        },
        pa: {
            title: "Palmyre",
            country: "Syrie",
            description: "Palmyre, située en Syrie, est un site archéologique majeur qui fut une prospère cité caravanière de l'Antiquité. Fondée au IIe millénaire av. J.-C., elle atteignit son apogée au Ier et IIe siècles sous l'Empire romain, devenant un centre commercial important entre l'Orient et l'Occident. Palmyre est célèbre pour ses ruines bien conservées, telles que le temple de Baal, le colonnade, et les tombeaux monumentaux. Classée au patrimoine mondial de l'UNESCO, la cité a été gravement endommagée lors des conflits récents, mais elle reste un symbole de la grandeur historique de la région.",
            imgSrc: "./monuments/74.jpg"
        },
        pd: {
            title: "Place du Darbâr",
            country: "Népal",
            description: "La Place du Darbâr, située à Katmandou, au Népal, est un site historique et culturel majeur. Elle a été le cœur politique et religieux de la vallée de Katmandou pendant des siècles, abritant des palais royaux, des temples et des statues religieuses. Le complexe, composé de plusieurs cours et places, est un exemple impressionnant de l'architecture traditionnelle népalaise. Classée au patrimoine mondial de l'UNESCO, la place du Darbâr est un lieu vibrant, symbolisant la richesse de l'histoire et de la culture du Népal.",
            imgSrc: "./monuments/75.jpg"
        },
        rs: {
            title: "Rocher de Sigiriya",
            country: "Sri Lanka",
            description: "Le Rocher de Sigiriya, situé au Sri Lanka, est une ancienne forteresse et un site archéologique impressionnant. Ce gigantesque monolithe, qui s'élève à 200 mètres de hauteur, fut utilisé comme palais royal au Ve siècle sous le roi Kassapa. Le site est célèbre pour ses fresques murales, ses jardins en terrasse et la porte en forme de lion qui marque l'entrée principale. Classé au patrimoine mondial de l'UNESCO, Sigiriya est un symbole de l'ingéniosité et de l'art ancien sri lankais, attirant des visiteurs du monde entier.",
            imgSrc: "./monuments/76.jpg"
        },
        mbs: {
            title: "Marina Bay Sands",
            country: "Singapour",
            description: "Marina Bay Sands est un complexe hôtelier et de loisirs emblématique situé à Singapour. Inauguré en 2010, il se distingue par son design futuriste, notamment sa terrasse panoramique en forme de bateau, qui surplombe les trois gratte-ciel du complexe. Le site abrite un casino, des restaurants de renommée mondiale, un centre commercial de luxe, un musée et une piscine à débordement offrant une vue spectaculaire sur la ville. Marina Bay Sands est devenu un symbole de l'innovation architecturale et un lieu incontournable pour les visiteurs de Singapour.",
            imgSrc: "./monuments/77.jpg"
        },
        fb: {
            title: "Fontaines du Bellagio",
            country: "États-Unis",
            description: "Les Fontaines du Bellagio, situées devant l'hôtel et casino Bellagio à Las Vegas, sont l'une des attractions les plus célèbres de la ville. Inaugurées en 1998, ces fontaines dansent au rythme de la musique, avec des jets d'eau pouvant atteindre jusqu'à 140 mètres de hauteur. Les spectacles sont accompagnés de diverses compositions musicales, allant de la musique classique aux chansons populaires, et se déroulent plusieurs fois par jour. Ce spectacle impressionnant, qui se déroule sur un grand lac artificiel, attire des millions de visiteurs chaque année.",
            imgSrc: "./monuments/78.jpg"
        },
        mr: {
            title: "Mont Rushmore",
            country: "États-Unis",
            description: "Le Mont Rushmore, situé dans les Black Hills du Dakota du Sud, aux États-Unis, est un monument emblématique représentant les visages de quatre présidents américains : George Washington, Thomas Jefferson, Theodore Roosevelt et Abraham Lincoln. Sculptée entre 1927 et 1941 par Gutzon Borglum et son fils, la montagne a été choisie pour sa forme et sa visibilité. Ce site national attire des millions de visiteurs chaque année et symbolise l'histoire et les idéaux fondateurs des États-Unis.",
            imgSrc: "./monuments/79.jpg"
        },
        ver: {
            title: "Château de Versailles",
            country: "France",
            description: "Le Château de Versailles, situé près de Paris, en France, est un symbole de la monarchie absolue et de l'art de vivre à la française. Construit au XVIIe siècle sous Louis XIV, il fut à la fois résidence royale et centre du pouvoir politique. Le château est célèbre pour ses somptueux appartements, ses jardins à la française, ses fontaines et le Hall of Mirrors, où le traité de Versailles fut signé en 1919. Classé au patrimoine mondial de l'UNESCO, Versailles reste l'un des plus grands et des plus prestigieux châteaux du monde.",
            imgSrc: "./monuments/80.jpg"
        },
        tb: {
            title: "Temple Blanc",
            country: "Thaïlande",
            description: "Le Temple Blanc (Wat Rong Khun) est un temple bouddhiste moderne situé à Chiang Rai, en Thaïlande. Conçu par l'artiste Chalermchai Kositpipat, il est connu pour son architecture unique et ses détails complexes. L'extérieur du temple est entièrement blanc, symbolisant la pureté, et il est orné de miroirs qui reflètent la lumière. À l'intérieur, les peintures modernes représentent des scènes à la fois religieuses et contemporaines, y compris des images de la culture pop. Le Temple Blanc est un lieu de culte vivant et une attraction touristique fascinante.",
            imgSrc: "./monuments/81.jpg"
        },
        msm: {
            title: "Mont-Saint-Michel",
            country: "France",
            description: "Le Mont-Saint-Michel, situé en Normandie, France, est une île rocheuse surmontée d'une abbaye médiévale dédiée à l'archange Michel. Érigé à partir du VIIIe siècle, il se dresse au cœur d'une vaste baie sujette aux marées spectaculaires, qui renforcent son caractère mystique. Ce site emblématique allie histoire, architecture gothique et paysages naturels. Classé au patrimoine mondial de l'UNESCO, le Mont-Saint-Michel est l'une des destinations les plus visitées de France, attirant des pèlerins et des touristes du monde entier.",
            imgSrc: "./monuments/82.jpg"
        },
        mh: {
            title: "Mont Huangshan",
            country: "Chine",
            description: "Le mont Huangshan, également appelé 'Montagne Jaune', est une chaîne montagneuse située dans la province de l'Anhui, en Chine. Connu pour ses pics granitiques spectaculaires, ses pins aux formes uniques et ses nuages de brume envoûtants, il a inspiré de nombreuses œuvres d'art et de poésie chinoises. Classé au patrimoine mondial de l'UNESCO, Huangshan est aussi célèbre pour ses sources chaudes et ses couchers de soleil à couper le souffle. Ce site naturel et culturel est une destination prisée des amateurs de randonnée et des passionnés de paysages majestueux.",
            imgSrc: "./monuments/84.jpg"
        },
        cch: {
            title: "Château de Chambord",
            country: "France",
            description: "Le château de Chambord, situé dans la vallée de la Loire, en France, est un chef-d'œuvre de la Renaissance française. Construit au XVIe siècle sous le règne de François Ier, il est célèbre pour son architecture unique, notamment son escalier à double révolution attribué à Léonard de Vinci. Entouré d'un vaste domaine forestier, Chambord est le plus grand château de la région et un symbole du pouvoir royal. Classé au patrimoine mondial de l'UNESCO, il attire des visiteurs du monde entier pour sa grandeur et son élégance.",
            imgSrc: "./monuments/83.jpg"
        },
        cnd: {
            title: "Cathédrale Notre-Dame de Paris",
            country: "France",
            description: "La cathédrale Notre-Dame de Paris, située sur l'île de la Cité, est un chef-d'œuvre de l'architecture gothique. Construite entre le XIIe et le XIVe siècle, elle est célèbre pour ses arcs-boutants, ses rosaces impressionnantes et ses sculptures détaillées. Symbole historique et spirituel, elle a été le théâtre d'événements majeurs, comme le couronnement de Napoléon. Bien que gravement endommagée par un incendie en 2019, Notre-Dame reste un symbole culturel incontournable de Paris et attire des millions de visiteurs chaque année. Sa restauration est en cours pour préserver son héritage.",
            imgSrc: "./monuments/85.jpg"
        },
        ss: {
            title: "Sainte-Sophie",
            country: "Turquie",
            description: "La basilique Sainte-Sophie, située à Istanbul, en Turquie, est un monument emblématique au carrefour des cultures et des religions. Construite au VIe siècle sous l'empereur byzantin Justinien, elle fut la plus grande église chrétienne du monde avant de devenir une mosquée au XVe siècle, après la conquête ottomane. Aujourd'hui reconvertie en mosquée, elle est célèbre pour son immense dôme, ses mosaïques byzantines et son architecture novatrice. Inscrite au patrimoine mondial de l'UNESCO, Sainte-Sophie est un symbole de l'histoire riche et complexe d'Istanbul.",
            imgSrc: "./monuments/86.jpg"
        }
    };

    const showPopup = (id) => {
        const info = monumentInfo[id];
        if (info) {
            popupContent.innerHTML = `
                <div style="display: flex; flex-direction: rows; align-items: center; text-align: center; gap: 15px;">
                <img src="${info.imgSrc}" style="width: 300px; height: 300px; object-fit: cover; border-radius: 30%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);">
                    <div style="text-align: left;">
                        <h2 style="margin: 0;">${info.title}</h2>
                        <h4 style="margin: 5px 0;">${info.country}</h4>
                        <p style="margin: 15px 0;">${info.description}</p>
                    </div>
                </div>
            `;

            overlay.classList.remove("hidden");
        }
    };
    

    // Ajouter un événement clic à chaque image
    images.forEach((img) => {
        img.addEventListener("click", () => {
            const parentDivId = img.parentElement.id; // ID du parent contient l'identifiant du monument
            showPopup(parentDivId);
        });
    });

    // Ajouter un événement clic à chaque bouton
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const parentDivId = btn.parentElement.id; // ID du parent contient l'identifiant du monument
            showPopup(parentDivId);
        });
    });

    // Fermer le popup
    closePopup.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });

    // Cacher le popup si on clique en dehors
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.add("hidden");
        }
    });

    const bot = document.getElementById("bot");
    bot.addEventListener("click", () => {
        alert("Site par Gaëtan Laurent");
    })
});