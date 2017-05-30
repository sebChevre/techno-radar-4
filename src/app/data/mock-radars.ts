import {Radar} from "../entity/Radar";
import {RadarElement} from "../entity/RadarElement";
/**
 * Created by seb on 25.05.17.
 */
export const RADARS: Radar[] = [
    { id: 11, titre: 'test', description: 'Mr. Nice',creation: new Date(),elements:null },
    { id: 12, titre: 'test',description: 'Narco',creation: new Date(),elements:null },
    { id: 13, titre: 'test',description: 'Bombasto' ,creation: new Date(),elements:null},
    { id: 14, titre: 'test',description: 'Celeritas',creation: new Date(),elements:null },
    { id: 15, titre: 'test',description: 'Magneta',creation: new Date(),elements:null },
    { id: 16, titre: 'test',description: 'RubberMan',creation: new Date(),elements:null },
    { id: 17, titre: 'test',description: 'Dynama',creation: new Date(),elements:null },
    { id: 18, titre: 'test',description: 'Dr IQ',creation: new Date(),elements:null },
    { id: 19, titre: 'test',description: 'Magma',creation: new Date(),elements:null },
    { id: 20, titre: 'test',description: 'Tornado',creation: new Date(),elements:null }
];

export const RADAR_ELEMENTS: RadarElement[] = [
    { id:1, nom: "Java", quadrant:"Langages et frameworks",description:"Turlututu chapeau poitu Java lolo",anneau:"Eviter",isNew:true,topic:"Développement",_ref:11},
    { id:2, nom: "Java2", quadrant:"Outils",description:"Turlututu chapeau poitu Java lolo",anneau:"Eviter",isNew:true,topic:"Agilité",_ref:11},
    { id:3, nom: "Java3", quadrant:"Methode",description:"Turlututu chapeau poitu Java lolo",anneau:"Eviter",isNew:true,topic:"Développement",_ref:11},
    { id:4, nom: "Java4", quadrant:"Tests",description:"Turlututu chapeau poitu Java lolo",anneau:"Eviter",isNew:true,topic:"DB",_ref:11}

];