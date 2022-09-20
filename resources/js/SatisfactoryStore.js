import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

export const useSatisfactoryStore = defineStore('satisfactory',{
    state: () => ({
       checklist: useStorage('checklist', product_list)
    }),

    getters: {
        tags(state) {
            return state.checklist.flatMap(o => o.tags).filter((o,i,c) => c.indexOf(o) === i).sort();
        }
    },

    actions: {
        filter(search, tags = []) {
            return this.checklist.filter(o => {
                switch (true) {
                    case !search.toString().trim() && !tags.length :
                    case !search.toString().trim() && o.tags.some(oo => tags.indexOf(oo) > -1) :
                    case !tags.length && o.name.toLowerCase().indexOf(search.toLowerCase()) > -1 :
                    case o.tags.some(oo => tags.indexOf(oo) > -1) && o.name.toLowerCase().indexOf(search.toLowerCase()) > -1 :
                        return true
                }
                return false;

            });
        },
        update(product) {
            this.checklist[this.checklist.findIndex(o => o.name === product.name)] = product;
        }
    }
});

const product_list = [
    // electronics
    {
        name: "AI Limiter",
        tags: ['electronics','tier 4','researched','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Battery",
        tags: ['electronics','tier 7'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Circuit Board",
        tags: ['electronics','tier 5','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Computer",
        tags: ['electronics','tier 5','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Crystal Oscillator",
        tags: ['electronics','tier 4','researched','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "High-Speed Connector",
        tags: ['electronics','tier 4','researched','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Supercomputer",
        tags: ['electronics','tier 7','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },


    // advanced products
    {
        name: "Cooling System",
        tags: ['tier 8','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Fused Modular Frame",
        tags: ['tier 8','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Heat Sink",
        tags: ['tier 8'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Pressure Conversion Cube",
        tags: ['tier 8'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Turbo Motor",
        tags: ['tier 8','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // space elevator parts
    {
        name: "Adaptive Control Unit",
        tags: ['tier 5','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Assembly Director System",
        tags: ['tier 7','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Automated Wiring",
        tags: ['tier 4','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Magnetic Field Generator",
        tags: ['tier 8','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Modular Engine",
        tags: ['tier 5','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Nuclear Pasta",
        tags: ['tier 8','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Smart Plating",
        tags: ['tier 2','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Thermal Propulsion Rocket",
        tags: ['tier 8','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Versatile Framework",
        tags: ['tier 3','space elevator'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // building parts
    {
        name: "Alclad Aluminum Sheet",
        tags: ['tier 7','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Aluminum Casing",
        tags: ['tier 7','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Beacon",
        tags: ['tier 1','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Cable",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Concrete",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Copper Sheet",
        tags: ['tier 2','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Encased Industrial Beam",
        tags: ['tier 4','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Heavy Modular Frame",
        tags: ['tier 4','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Iron Plate",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Iron Rod",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Modular Frame",
        tags: ['tier 2','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Motor",
        tags: ['tier 4','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Portable Miner",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Quantum Server",
        tags: ['tier 8','building','mk++'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Quartz Crystal",
        tags: ['tier 4','building','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Quickwire",
        tags: ['tier 4','building','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Radio Control Unit",
        tags: ['tier 7','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Reinforced Iron Plate",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Rotor",
        tags: ['tier 2','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Screw",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Silica",
        tags: ['tier 4','building','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Steel Beam",
        tags: ['tier 3','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Steel Pipe",
        tags: ['tier 3','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Wire",
        tags: ['tier 0','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // refined/intermediate materials
    {
        name: "Aluminum Ingot",
        tags: ['tier 7','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Aluminum Scrap",
        tags: ['tier 7','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Black Powder",
        tags: ['tier 4','intermediate','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Caterium Ingot",
        tags: ['tier 4','intermediate','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Copper Ingot",
        tags: ['tier 0','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Copper Powder",
        tags: ['tier 8','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Iron Ingot",
        tags: ['tier 0','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Alumina Solution",
        tags: ['tier 7','intermediate','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Steel Ingot",
        tags: ['tier 3','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Sulfuric Acid",
        tags: ['tier 7','intermediate','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // gases, liquids & liquid handling
    {
        name: "Empty Canister",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Empty Fluid Tank",
        tags: ['tier 8','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Nitric Acid",
        tags: ['tier 8','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Alumina Solution",
        tags: ['tier 7','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Fuel",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Heavy Oil Residue",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Liquid Biofuel",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Nitric Acid",
        tags: ['tier 8','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Nitrogen Gas",
        tags: ['tier 8','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Oil",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Sulfuric Acid",
        tags: ['tier 7','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Turbofuel",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Packaged Water",
        tags: ['tier 5','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // oil-based products
    {
        name: "Heavy Oil Residue",
        tags: ['tier 5','oil-based','intermediate','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Plastic",
        tags: ['tier 5','oil-based','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Polymer Resin",
        tags: ['tier 5','oil-based','intermediate'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Rubber",
        tags: ['tier 5','oil-based','building'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // ores & raw materials
    {
        name: "Bauxite",
        tags: ['tier 7','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Caterium Ore",
        tags: ['tier 4','raw materials','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Copper Ore",
        tags: ['tier 0','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Iron Ore",
        tags: ['tier 0','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Limestone",
        tags: ['tier 0','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Nitrogen Gas",
        tags: ['tier 8','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Crude Oil",
        tags: ['tier 5','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Raw Quartz",
        tags: ['tier 4','raw materials','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "SAM Ore",
        tags: ['tier 9','raw materials'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Sulfur",
        tags: ['tier 4','raw materials','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Uranium",
        tags: ['tier 8','raw materials','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Water",
        tags: ['tier 3','raw materials','gases & liquids'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // fuels & power generation
    {
        name: "Biomass",
        tags: ['tier 0','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Coal",
        tags: ['tier 3','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Compacted Coal",
        tags: ['tier 3','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Electromagnetic Control Rod",
        tags: ['nuclear','tier 8','building','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Encased Plutonium Cell",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Encased Uranium Cell",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Fuel",
        tags: ['tier 5','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Liquid Biofuel",
        tags: ['tier 5','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Non-fissile Uranium",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Petroleum Coke",
        tags: ['tier 5','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Plutonium Fuel Rod",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Plutonium Pellet",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Plutonium Waste",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Solid Biofuel",
        tags: ['tier 2','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Turbofuel",
        tags: ['tier 5','fuel & power'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Uranium Fuel Rod",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Uranium Waste",
        tags: ['tier 8','fuel & power','nuclear'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },

    // wearables & pioneer tech
    {
        name: "Fabric",
        tags: ['tier 4','researched','pioneer tech'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Gas Filter",
        tags: ['tier 5','pioneer tech'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Iodine Infused Filter",
        tags: ['tier 7','pioneer tech'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Nobelisk",
        tags: ['tier 4','pioneer tech','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Rifle Cartridge",
        tags: ['tier 4','pioneer tech','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
    {
        name: "Spiked Rebar",
        tags: ['tier 2','pioneer tech','researched'],
        producing: 0,
        manual: true,
        automated: false,
        storage: false,
        notes: ''
    },
];
