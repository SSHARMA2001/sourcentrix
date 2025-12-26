export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  details: string[];
  images: ProductImage[];
}

export interface SubCategory {
  id: string;
  name: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export const productCatalog: Category[] = [
  {
    id: 'agri-solution',
    name: 'Agri Solution',
    subCategories: [
      {
        id: 'boom-sprayers',
        name: 'Boom Sprayers',
        products: [
          {
            id: 'boom-sprayer-1',
            name: 'Boom Sprayer',
            description: 'High-performance boom sprayers designed for efficient agricultural spraying operations.',
            details: [
              'Adjustable boom width for different field sizes',
              'Precision spraying technology',
              'Durable construction for long-lasting performance',
              'Easy maintenance and operation',
              'Compatible with various tractor models'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/boom_sprayer/boom_sprayer01.jpg', alt: 'Boom Sprayer Front View' },
              { src: '/src/assets/extracted_images/products/boom_sprayer/boom_sprayer02.png', alt: 'Boom Sprayer Side View' },
              { src: '/src/assets/extracted_images/products/boom_sprayer/boom_sprayer03.png', alt: 'Boom Sprayer Detail' },
              { src: '/src/assets/extracted_images/products/boom_sprayer/boom_sprayer04.png', alt: 'Boom Sprayer Detail' }, 
            ]
          }
        ]
      },
      {
        id: 'threshers',
        name: 'Threshers',
        products: [
          {
            id: 'thresher-1',
            name: 'Agricultural Thresher',
            description: 'Efficient threshing machines for grain processing with high capacity and reliability.',
            details: [
              'High threshing capacity',
              'Low grain loss',
              'Energy efficient operation',
              'Easy grain collection system',
              'Suitable for multiple crop types'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/thresher/thresher01.png', alt: 'Thresher Overview' },
              { src: '/src/assets/extracted_images/products/thresher/thresher02.png', alt: 'Thresher Detail' },
              { src: '/src/assets/extracted_images/products/thresher/thresher03.png', alt: 'Thresher Detail' },
              { src: '/src/assets/extracted_images/products/thresher/thresher04.png', alt: 'Thresher Detail' },
            ]
          }
        ]
      },
      {
        id: 'hydraulic-reversible-plough',
        name: 'Hydraulic Reversible Plough',
        products: [
          {
            id: 'hydraulic-plough-1',
            name: 'Hydraulic Reversible Plough',
            description: 'Advanced hydraulic reversible plough for efficient soil preparation and tillage operations.',
            details: [
              'Hydraulic reversible mechanism',
              'Precision depth control',
              'Durable steel construction',
              'Suitable for various soil types',
              'Easy attachment to tractors'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/hydraulic_reversible/hydraulic01.png', alt: 'Hydraulic Plough' },
              { src: '/src/assets/extracted_images/products/hydraulic_reversible/hydraulic02.png', alt: 'Hydraulic Plough' }
            ]
          }
        ]
      },
      {
        id: 'multi-crop-planters',
        name: 'Multi Crop Planters',
        products: [
          {
            id: 'planter-1',
            name: 'Multi Crop Planter',
            description: 'Versatile planting equipment designed for multiple crop types with precision seeding.',
            details: [
              'Adjustable row spacing',
              'Precision seed metering',
              'Multi-crop compatibility',
              'Durable seed hoppers',
              'Easy calibration system'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/multi_crop_planters/multi_crop01.png', alt: 'Multi Crop Planter' },
              { src: '/src/assets/extracted_images/products/multi_crop_planters/multi_crop02.png', alt: 'Multi Crop Planter' },
              { src: '/src/assets/extracted_images/products/multi_crop_planters/multi_crop03.png', alt: 'Multi Crop Planter' },
              { src: '/src/assets/extracted_images/products/multi_crop_planters/multi_crop04.png', alt: 'Multi Crop Planter' },
            ]
          }
        ]
      },
      {
        id: 'cultivators',
        name: 'Variety of Cultivators',
        products: [
          {
            id: 'cultivator-1',
            name: 'Agricultural Cultivator',
            description: 'Heavy-duty cultivators for soil preparation and weed control.',
            details: [
              'Multiple tine configurations',
              'Adjustable working depth',
              'Robust frame construction',
              'Efficient weed removal',
              'Suitable for various field conditions'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/cultivators/cultivators01.png', alt: 'Cultivator' },
              { src: '/src/assets/extracted_images/products/cultivators/cultivators02.png', alt: 'Cultivator' },
              { src: '/src/assets/extracted_images/products/cultivators/cultivators03.png', alt: 'Cultivator' },  
              { src: '/src/assets/extracted_images/products/cultivators/cultivators04.png', alt: 'Cultivator' },
              { src: '/src/assets/extracted_images/products/cultivators/cultivators05.png', alt: 'Cultivator' },
              { src: '/src/assets/extracted_images/products/cultivators/cultivators06.png', alt: 'Cultivator' }
            ]
          }
        ]
      },
      {
        id: 'crop-sheller',
        name: 'Variety of Crop Sheller',
        products: [
          {
            id: 'sheller-1',
            name: 'Crop Sheller',
            description: 'Efficient shelling machines for processing various crops.',
            details: [
              'High shelling efficiency',
              'Low grain damage',
              'Easy operation',
              'Multiple crop compatibility',
              'Durable construction'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/crop_sheller/crop_sheller01.png', alt: 'Crop Sheller' },
              { src: '/src/assets/extracted_images/products/crop_sheller/crop_sheller02.png', alt: 'Crop Sheller' },
              { src: '/src/assets/extracted_images/products/crop_sheller/crop_sheller03.png', alt: 'Crop Sheller' }            ]
          }
        ]
      },
      {
        id: 'wheelbarrow',
        name: 'Wheelbarrow - Single & Double Wheel',
        products: [
          {
            id: 'wheelbarrow-single',
            name: 'Single Wheel Wheelbarrow',
            description: 'Traditional single-wheel wheelbarrow for agricultural and construction use.',
            details: [
              'Heavy-duty steel construction',
              'Large capacity bucket',
              'Ergonomic handles',
              'Pneumatic tire',
              'Rust-resistant finish'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/wheelbarrow/singlewheelbarrow.png', alt: 'Single Wheel Wheelbarrow' }
            ]
          },
          {
            id: 'wheelbarrow-double',
            name: 'Double Wheel Wheelbarrow',
            description: 'Stable double-wheel wheelbarrow for heavy-duty applications.',
            details: [
              'Enhanced stability with dual wheels',
              'Higher load capacity',
              'Durable construction',
              'Easy maneuverability',
              'Suitable for rough terrain'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/wheelbarrow/doublewheelbarrow.png', alt: 'Double Wheel Wheelbarrow' }
            ]
          }
        ]
      },
      {
        id: 'disc-harrow',
        name: 'Variety of Disc Harrow',
        products: [
          {
            id: 'disc-harrow-1',
            name: 'Disc Harrow',
            description: 'Efficient disc harrows for soil preparation and seedbed preparation.',
            details: [
              'Multiple disc configurations',
              'Adjustable disc angle',
              'Heavy-duty construction',
              'Efficient soil cutting',
              'Suitable for various soil conditions'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/disc_harrow/disc_harrow01.png', alt: 'Disc Harrow' },
              { src: '/src/assets/extracted_images/products/disc_harrow/disc_harrow02.png', alt: 'Disc Harrow' },
              { src: '/src/assets/extracted_images/products/disc_harrow/disc_harrow03.png', alt: 'Disc Harrow' },
              { src: '/src/assets/extracted_images/products/disc_harrow/disc_harrow04.png', alt: 'Disc Harrow' }
            ]
          }
        ]
      },
      {
        id: 'sub-soiler',
        name: 'Sub Soiler',
        products: [
          {
            id: 'subsoiler-1',
            name: 'Sub Soiler',
            description: 'Deep tillage equipment for breaking up compacted soil layers.',
            details: [
              'Deep penetration capability',
              'Breaks soil compaction',
              'Improves water infiltration',
              'Heavy-duty construction',
              'Suitable for hard soils'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/sub_soiler/sub_soiler01.png', alt: 'Sub Soiler' },
              { src: '/src/assets/extracted_images/products/sub_soiler/sub_soiler02.png', alt: 'Sub Soiler' }
            ]
          }
        ]
      },
      {
        id: 'furrow',
        name: 'Variety of Furrow',
        products: [
          {
            id: 'furrow-1',
            name: 'Furrow Maker',
            description: 'Precision furrow making equipment for row crop planting.',
            details: [
              'Consistent furrow depth',
              'Adjustable spacing',
              'Durable construction',
              'Easy operation',
              'Suitable for various crops'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/furrow/furrow01.png', alt: 'Furrow Maker' },
              { src: '/src/assets/extracted_images/products/furrow/furrow02.png', alt: 'Furrow Maker' },
              { src: '/src/assets/extracted_images/products/furrow/furrow03.png', alt: 'Furrow Maker' }            ]
          }
        ]
      },
      {
        id: 'tractor-trailer',
        name: 'Iron Tractor Trailer - Multi Axle with Hydraulic Setup',
        products: [
          {
            id: 'tractor-trailer-1',
            name: 'Multi-Axle Tractor Trailer',
            description: 'Heavy-duty multi-axle tractor trailers with hydraulic systems for agricultural transport.',
            details: [
              'Multi-axle configuration',
              'Hydraulic tipping mechanism',
              'High load capacity',
              'Durable steel construction',
              'Easy coupling system'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/tractor_trailer/multi_axle_trailer.png', alt: 'Tractor Trailer' },   
              ]
          }
        ]
      },
      {
        id: 'casting-tyne',
        name: 'Variety of Casting Tyne',
        products: [
          {
            id: 'casting-tyne-1',
            name: 'Casting Tyne',
            description: 'High-quality casting tynes for agricultural cultivation and soil preparation.',
            details: [
              'Durable casting construction',
              'Various sizes available',
              'Suitable for different soil types',
              'Long-lasting performance',
              'Easy replacement'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne01.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne02.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne03.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne04.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne05.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne06.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne07.png', alt: 'Casting Tyne' },
              { src: '/src/assets/extracted_images/products/casting_tyne/casting_tyne08.png', alt: 'Casting Tyne' }
            ]
          }
        ]
      },
      {
        id: 'animal-driven-plough',
        name: 'Animal Driven Plough',
        products: [
          {
            id: 'animal-plough-1',
            name: 'Animal Driven Plough',
            description: 'Traditional animal-driven plough for small-scale farming and traditional agricultural practices.',
            details: [
              'Designed for animal traction',
              'Lightweight and durable',
              'Easy to operate',
              'Suitable for small farms',
              'Traditional farming method'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/animal_driven_plough/animal_driven_plough01.png', alt: 'Animal Driven Plough' },
              { src: '/src/assets/extracted_images/products/animal_driven_plough/animal_driven_plough02.png', alt: 'Animal Driven Plough' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hydraulic-solution',
    name: 'Hydraulic Solution',
    subCategories: [
      {
        id: 'metering-skid',
        name: 'Metering Skid',
        products: [
          {
            id: 'metering-skid-1',
            name: 'Metering Skid System',
            description: 'Precision metering skid systems for accurate fluid measurement and control.',
            details: [
              'High precision metering',
              'Accurate flow measurement',
              'Robust construction',
              'Easy calibration',
              'Suitable for various fluids'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/metering_skid/metering_skid.png', alt: 'Metering Skid' }
            ]
          }
        ]
      },
      {
        id: 'hydraulics-fitting-valve-solution',
        name: 'Hydraulics fitting Valve solution-Carbon steel, Stainless steel & Brass',
        products: [
          {
            id: 'fitting-carbon-steel-solution',
            name: 'Carbon Steel Hydraulic Fittings & Valves',
            description: 'High-quality carbon steel hydraulic fittings and valves for industrial applications.',
            details: [
              'Carbon steel construction',
              'High pressure rating',
              'Corrosion resistant',
              'Various sizes available',
              'Industry standard connections'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/hydraulics_fitting_valve/hydraulics_fitting_valve01.png', alt: 'Hydraulics Fitting Valve' },
              { src: '/src/assets/extracted_images/products/hydraulics_fitting_valve/hydraulics_fitting_valve02.png', alt: 'Hydraulics Fitting Valve' },
            ]
          }, 
        ]
      },
      {
        id: 'tubing-hose',
        name: 'Tubing & Hose Solution',
        products: [
          {
            id: 'tubing-hose-1',
            name: 'Hydraulic Tubing & Hose Solutions',
            description: 'Comprehensive range of hydraulic tubing and hoses for various applications.',
            details: [
              'High pressure rating',
              'Flexible and durable',
              'Various sizes and lengths',
              'Temperature resistant',
              'Compatible with standard fittings'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/tubing_hose/tubing_hose.png', alt: 'Hydraulic Tubing & Hose' }
            ]
          }
        ]
      },
      {
        id: 'lubrication-unit',
        name: 'Lubrication Unit',
        products: [
          {
            id: 'lubrication-unit-1',
            name: 'Lubrication Unit',
            description: 'Efficient lubrication units for hydraulic systems and machinery maintenance.',
            details: [
              'Precision lubrication delivery',
              'Automated lubrication system',
              'Reduces maintenance downtime',
              'Extends equipment life',
              'Suitable for various machinery types'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/lubrication/lubrication.png', alt: 'Lubrication Unit' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'forgings-machining',
    name: 'Forgings & Machining Parts',
    subCategories: [
      {
        id: 'high-precision-shaft',
        name: 'High Precision Shaft',
        products: [
          {
            id: 'precision-shaft-1',
            name: 'High Precision Shaft',
            description: 'Precision-machined shafts manufactured to tight tolerances for critical applications.',
            details: [
              'Tight tolerance machining',
              'High surface finish',
              'Various materials available',
              'Custom specifications',
              'Quality assured'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/high_precision_shaft/high_precision_shaft.png', alt: 'High Precision Shaft' }
            ]
          }
        ]
      },
      {
        id: 'eccentric-shaft',
        name: 'Eccentric Shaft',
        products: [
          {
            id: 'eccentric-mild-steel',
            name: 'Eccentric Shaft - Mild Steel',
            description: 'Eccentric shafts manufactured from mild steel for various industrial applications.',
            details: [
              'Mild steel construction',
              'Precision machining',
              'Cost-effective solution',
              'Suitable for general applications',
              'Various sizes available'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/eccentric_shaft/eccentric_shaft.png', alt: 'Eccentric Shaft Mild Steel' }
            ]
          },
         
        ]
      },
      {
        id: 'crusher-stone-shafts',
        name: 'Crusher Stone Shafts',
        products: [
          {
            id: 'crusher-shaft-1',
            name: 'Crusher Stone Shaft',
            description: 'Heavy-duty shafts designed specifically for stone crusher applications.',
            details: [
              'Heavy-duty construction',
              'High impact resistance',
              'Various sizes available',
              'Suitable for all crusher types',
              'Durable performance'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/crusher_stone_shafts/crusher_stone_shafts.png', alt: 'Crusher Stone Shaft' }
            ]
          }
        ]
      },
      {
        id: 'links-pins-bushes',
        name: 'Links, Pins, Bushes',
        products: [
          {
            id: 'links-pins-bushes-1',
            name: 'Links, Pins, Bushes',
            description: 'High-quality links, pins, and bushes for industrial and mechanical applications.',
            details: [
              'Precision manufacturing',
              'High strength materials',
              'Wear resistant',
              'Various sizes available',
              'Long service life'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/links_pins_bushes_bosses/links_pins_bushes_bosses.png', alt: 'Links, Pins, Bushes' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mining-consumables',
    name: 'Mining Consumables',
    subCategories: [
      {
        id: 'mining-screen-wire-media',
        name: 'Mining Screen Wire Media, Wedge Wire Media',
        products: [
          {
            id: 'mining-screen-wire-1',
            name: 'Mining Screen Wire Media & Wedge Wire Media',
            description: 'High-quality wire media and wedge wire screens for mining applications.',
            details: [
              'Durable wire construction',
              'Various mesh sizes',
              'Corrosion resistant',
              'Long service life',
              'Suitable for harsh mining environments'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/mining_consumables/mining_screen_wire_media/wire_media01.png', alt: 'Mining Screen Wire Media' },
              { src: '/src/assets/extracted_images/products/mining_consumables/mining_screen_wire_media/wire_media02.png', alt: 'Mining Screen Wire Media' }
            ]
          }
        ]
      },
      {
        id: 'rubber-pu-media',
        name: 'Rubber Media & PU Media',
        products: [
          {
            id: 'rubber-pu-media-1',
            name: 'Rubber Media & PU Media',
            description: 'Premium rubber and polyurethane media for mining screen applications.',
            details: [
              'High wear resistance',
              'Excellent impact absorption',
              'Various hardness grades',
              'Long-lasting performance',
              'Suitable for heavy-duty operations'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/mining_consumables/rubber_pu_media/rubber_pu_media01.png', alt: 'Rubber & PU Media' },
              { src: '/src/assets/extracted_images/products/mining_consumables/rubber_pu_media/rubber_pu_media02.png', alt: 'Rubber & PU Media' }
            ]
          }
        ]
      },
      {
        id: 'mining-screen-housings',
        name: 'Mining Screen Housings and Castings',
        products: [
          {
            id: 'mining-housings-1',
            name: 'Mining Screen Housings and Castings',
            description: 'Robust housings and castings for mining screen systems.',
            details: [
              'Heavy-duty construction',
              'Precision casting',
              'Durable materials',
              'Custom designs available',
              'Suitable for all mining applications'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/mining_consumables/mining_screen_housings/housings01.png', alt: 'Mining Screen Housings' },
              { src: '/src/assets/extracted_images/products/mining_consumables/mining_screen_housings/housings02.png', alt: 'Mining Screen Housings' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'heavy-fabrication',
    name: 'Heavy Fabrication',
    subCategories: [
      {
        id: 'large-medium-small-fabrication',
        name: 'Large and Medium & Small Fabrication',
        products: [
          {
            id: 'fabrication-large',
            name: 'Large and medium & small fabrication',
            description: 'Large-scale fabrication services for industrial structures.',
            details: [
              'Large size capability',
              'Heavy-duty construction',
              'Custom designs',
              'Quality welding',
              'On-time delivery'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/heavy_fabrication/large_medium_small_fabrication/fabrication01.png', alt: 'Large Fabrication' }
            ]
          }
        ]
      },
      {
        id: 'boom-dipper-bucket-shovel',
        name: 'Boom Dipper, Bucket Shovel and Fabrication Items',
        products: [
          {
            id: 'boom-dipper-bucket-1',
            name: 'Boom Dipper, Bucket Shovel and Fabrication Items',
            description: 'Heavy-duty boom dippers, bucket shovels, and related fabrication components for excavators and mining equipment.',
            details: [
              'Heavy-duty construction',
              'High-strength materials',
              'Precision fabrication',
              'Custom designs available',
              'Suitable for excavators and mining equipment'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/heavy_fabrication/boom_dipper_bucket_shovel/boom_dipper_bucket01.png', alt: 'Boom Dipper & Bucket Shovel' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'casting-pulley',
    name: 'Casting & Pulley',
    subCategories: [
      {
        id: 'casting-pulleys-all-sizes',
        name: 'Variety of Casting & Pulleys of All Size',
        products: [
          {
            id: 'casting-pulleys-1',
            name: 'Casting & Pulleys - All Sizes',
            description: 'Comprehensive range of castings and pulleys in various sizes for industrial applications.',
            details: [
              'Various sizes available',
              'High-quality casting',
              'Durable construction',
              'Suitable for various industries',
              'Industry standard specifications'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/casting_pulley/casting_pulleys_all_sizes/casting_pulleys01.png', alt: 'Casting & Pulleys' },
              { src: '/src/assets/extracted_images/products/casting_pulley/casting_pulleys_all_sizes/casting_pulleys02.png', alt: 'Casting & Pulleys' },
              { src: '/src/assets/extracted_images/products/casting_pulley/casting_pulleys_all_sizes/casting_pulleys03.png', alt: 'Casting & Pulleys' },
              { src: '/src/assets/extracted_images/products/casting_pulley/casting_pulleys_all_sizes/casting_pulleys04.png', alt: 'Casting & Pulleys' },
              { src: '/src/assets/extracted_images/products/casting_pulley/casting_pulleys_all_sizes/casting_pulleys05.png', alt: 'Casting & Pulleys' },
              { src: '/src/assets/extracted_images/products/casting_pulley/casting_pulleys_all_sizes/casting_pulleys06.png', alt: 'Casting & Pulleys' }
            ]
          }
        ]
      },
      {
        id: 'fg-sg-casting-parts',
        name: 'FG & SG Casting parts for Agri, Mining & Industrial',
        products: [
          {
            id: 'fg-sg-casting-1',
            name: 'FG & SG Casting Parts',
            description: 'Ferrous and Spheroidal Graphite casting parts for agricultural, mining, and industrial applications.',
            details: [
              'FG and SG casting technology',
              'High strength and durability',
              'Suitable for agriculture, mining, and industrial use',
              'Various grades available',
              'Quality assured'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting01.png', alt: 'FG & SG Casting Parts' },
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting02.png', alt: 'FG & SG Casting Parts' },
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting03.png', alt: 'FG & SG Casting Parts' },
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting04.png', alt: 'FG & SG Casting Parts' },
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting05.png', alt: 'FG & SG Casting Parts' },
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting06.png', alt: 'FG & SG Casting Parts' },
              { src: '/src/assets/extracted_images/products/casting_pulley/fg_sg_casting_parts/fg_sg_casting07.png', alt: 'FG & SG Casting Parts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'spare-standard-parts',
    name: 'Spare & Standard Parts',
    subCategories: [
      {
        id: 'pins-excavators',
        name: 'Pins - All Types of Grade for Excavators',
        products: [
          {
            id: 'pins-excavators-1',
            name: 'Pins - All Types of Grade for Excavators',
            description: 'Comprehensive range of high-grade pins for excavators and heavy machinery.',
            details: [
              'Various grades available',
              'High strength materials',
              'Multiple sizes',
              'Wear resistant',
              'Suitable for excavators'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/spare_standard_parts/pins_excavators/pins_excavators01.png', alt: 'Excavator Pins' }
            ]
          }
        ]
      },
      {
        id: 'rubber-roll',
        name: 'Rubber Roll',
        products: [
          {
            id: 'rubber-roll-1',
            name: 'Rubber Roll',
            description: 'High-quality rubber rolls for various industrial applications.',
            details: [
              'Various sizes available',
              'High-quality rubber',
              'Durable construction',
              'Suitable for multiple applications',
              'Long service life'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/spare_standard_parts/rubber_roll/rubber_roll01.png', alt: 'Rubber Roll' }
            ]
          }
        ]
      },
      {
        id: 'adapter',
        name: 'Adapter',
        products: [
          {
            id: 'adapter-1',
            name: 'Adapter',
            description: 'Precision adapters for connecting various industrial components.',
            details: [
              'Various configurations',
              'High precision manufacturing',
              'Durable materials',
              'Easy installation',
              'Compatible with standard fittings'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/spare_standard_parts/adapter/adapter01.png', alt: 'Adapter' }
            ]
          }
        ]
      },
      {
        id: 'bucket-teeth',
        name: 'Bucket Teeth',
        products: [
          {
            id: 'bucket-teeth-1',
            name: 'Bucket Teeth',
            description: 'Heavy-duty bucket teeth for excavators and earth-moving equipment.',
            details: [
              'High wear resistance',
              'Various sizes and styles',
              'Easy replacement',
              'Durable construction',
              'Suitable for all bucket types'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/spare_standard_parts/bucket_teeth/bucket_teeth01.png', alt: 'Bucket Teeth' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'industrial-consumables',
    name: 'Industrial Consumables',
    subCategories: [
      {
        id: 'tube-cutter',
        name: 'Tube Cutter',
        products: [
          {
            id: 'tube-cutter-1',
            name: 'Tube Cutter',
            description: 'Precision tube cutting tools for industrial applications.',
            details: [
              'Precision cutting',
              'Various sizes',
              'Durable construction',
              'Easy to use',
              'Suitable for multiple materials'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/industrial_consumables/tube_cutter/tube_cutter01.png', alt: 'Tube Cutter' }
            ]
          }
        ]
      },
      {
        id: 'insulation-sheet',
        name: 'Insulation Sheet',
        products: [
          {
            id: 'insulation-sheet-1',
            name: 'Insulation Sheet',
            description: 'High-quality insulation sheets for industrial applications.',
            details: [
              'Thermal insulation',
              'Various thicknesses',
              'Durable materials',
              'Easy installation',
              'Suitable for multiple applications'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/industrial_consumables/insulation_sheet/insulation_sheet01.png', alt: 'Insulation Sheet' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tailored-solution',
    name: 'Tailored Solution',
    subCategories: [
      {
        id: 'custom-solutions',
        name: 'Custom Solutions',
        products: [
          {
            id: 'tailored-solution-1',
            name: 'Tailored Solution',
            description: 'Customization as per customer requirement. We provide personalized industrial solutions tailored to meet your specific needs and requirements.',
            details: [
              'Custom solutions designed for your needs',
              'Tailored to customer requirements',
              'Expert consultation and design',
              'Flexible manufacturing options',
              'Quality assured custom products',
              'Comprehensive support and service'
            ],
            images: [
              { src: '/src/assets/extracted_images/products/tailored_solution/tailored_solution.png', alt: 'Tailored Solution' }
            ]
          }
        ]
      }
    ]
  }
];

