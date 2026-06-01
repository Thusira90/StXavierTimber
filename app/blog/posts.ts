export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  note?: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'what-is-ispm-15-heat-treatment',
    title: 'What Is ISPM 15 Heat Treatment — And Why Sri Lankan Exporters Need It',
    description:
      "If you're exporting goods on wooden pallets or in wooden crates, ISPM 15 heat treatment isn't optional — it's a legal requirement in over 180 countries. Here's what it means, how it works, and what the IPPC mark on your timber certifies.",
    date: '2026-05-15',
    readTime: '5 min read',
    category: 'Export & Compliance',
    tags: ['ISPM 15', 'export pallets', 'heat treatment', 'IPPC', 'phytosanitary', 'Sri Lanka export'],
    sections: [
      {
        heading: 'What ISPM 15 Actually Is',
        paragraphs: [
          'ISPM 15 — the International Standards for Phytosanitary Measures No. 15 — is a global standard developed by the International Plant Protection Convention (IPPC) that governs the treatment of wooden packaging materials used in international trade. In plain terms: if your goods are packed on wooden pallets, in wooden crates, or secured with wooden dunnage, those materials must be treated and marked to ISPM 15 before they can cross most international borders.',
          'The standard exists to prevent the spread of invasive insects and plant diseases that can travel undetected inside untreated wood. Bark beetles, pine wood nematodes, and dozens of other organisms have caused billions of dollars in agricultural and forestry damage after hitchhiking across borders in wooden packaging. ISPM 15 is the international response to that threat.',
        ],
      },
      {
        heading: 'Why It Matters for Sri Lankan Exporters',
        paragraphs: [
          "Sri Lanka exports tea, apparel, rubber products, ceramics, and a wide range of manufactured goods — much of it packed on wooden pallets or in wooden crates. If those pallets are not ISPM 15 compliant, destination country customs authorities are legally entitled to refuse entry, fumigate the shipment at the exporter's expense, or destroy the packaging on arrival.",
          'The practical cost of non-compliance is significant: delayed shipments, demurrage charges, fumigation fees, and — in some cases — the loss of the entire consignment. For exporters working on tight margins with time-sensitive contracts, these are risks that can be eliminated entirely by using ISPM 15 certified packaging.',
        ],
      },
      {
        heading: 'What the Treatment Involves',
        paragraphs: [
          'ISPM 15 permits two approved treatment methods: heat treatment (HT) and methyl bromide fumigation (MB). Heat treatment is the globally preferred method — methyl bromide is being phased out under the Montreal Protocol and is already banned in many destination countries including the EU.',
          'Heat treatment requires the entire cross-section of the wood to reach a core temperature of 56°C for a minimum of 30 continuous minutes. This temperature kills all life stages of regulated organisms including eggs, larvae, and adults. The treatment must be carried out by an IPPC-registered facility and verified with calibrated temperature probes at the core of the thickest piece in each batch.',
        ],
        list: [
          'Core temperature of 56°C must be sustained for 30 continuous minutes',
          'Applies to all solid wood packaging material (SWPM) in the shipment',
          'Treatment must be performed by an IPPC-registered provider',
          'Wood must be marked with the official IPPC mark post-treatment',
        ],
      },
      {
        heading: 'What the IPPC Mark Certifies',
        paragraphs: [
          'The IPPC mark — sometimes called the "wheat sheaf" symbol — is applied to every piece of treated wood packaging by the registered treatment provider. The mark includes the country code (LK for Sri Lanka), the unique registration number of the treatment facility, and the treatment method code (HT for heat treatment).',
          'Customs authorities at destination ports are trained to look for this mark. An absent, incorrect, or counterfeit mark triggers the same response as untreated packaging. The mark is your documentation — it proves compliance without requiring additional paperwork at the point of inspection.',
        ],
        note: 'St. Xavier Timber is IPPC registered with the National Plant Quarantine Service (NPQS) of Sri Lanka. Every heat-treated consignment leaves our facility with the correct IPPC mark and a full treatment record document.',
      },
      {
        heading: 'Common Mistakes Exporters Make',
        paragraphs: [
          'The most common mistake is assuming that pallets purchased locally are automatically ISPM 15 compliant. They are not — unless they were made from timber treated by an IPPC-registered facility and correctly marked. Buying unmarked pallets from a hardware shop or small workshop is a compliance risk.',
          'The second mistake is treating ISPM 15 as a one-time formality rather than a per-shipment requirement. Each batch of pallets used in an export shipment must be treated. Reusing pallets that were treated for a previous shipment is generally acceptable only if the mark remains legible and the wood has not been modified.',
        ],
      },
      {
        heading: 'How St. Xavier Timber Can Help',
        paragraphs: [
          'St. Xavier Timber is IPPC registered and has been providing heat treatment for wooden packaging since our pallet manufacturing division launched over two decades ago. We treat high volumes of pallet timber on a regular basis and issue the documentation exporters need for customs clearance.',
          'Our sister company, CeyPall, manufactures ISPM 15 certified wooden pallets to order — made from St. Xavier treated timber and ready for export. Whether you need treatment for your own pallets or a supply of certified pallets, we can turn orders around quickly to meet your shipping schedule.',
        ],
      },
    ],
  },
  {
    slug: 'kiln-drying-vs-air-drying-timber',
    title: "Kiln Drying vs Air Drying: What's the Difference and Which Should You Use?",
    description:
      'Both kiln drying and air drying reduce moisture in timber, but they produce very different results at very different speeds. Learn which method suits your application — and why most industrial uses demand kiln-dried timber.',
    date: '2026-05-08',
    readTime: '4 min read',
    category: 'Timber Treatment',
    tags: ['kiln drying', 'air drying', 'moisture content', 'timber drying', 'wood treatment Sri Lanka'],
    sections: [
      {
        heading: 'The Problem with Moisture in Timber',
        paragraphs: [
          'Freshly cut timber — sometimes called green timber — contains a significant amount of water. Depending on the species, freshly sawn wood can have a moisture content (MC) of anywhere between 50% and over 100%. This moisture has to go somewhere, and how it leaves the wood matters enormously for the final product.',
          'As timber dries, it shrinks. If it dries unevenly — which is almost inevitable without controlled drying — different parts of the board shrink at different rates, causing warping, cupping, splitting, and checking. Controlling the drying process is what separates quality structural and finished timber from timber that fails in service.',
        ],
      },
      {
        heading: 'How Air Drying Works',
        paragraphs: [
          'Air drying is the simplest method: sawn timber is stacked in open or covered storage with spacers (stickers) between each layer to allow air circulation. The wood dries naturally as ambient air carries moisture away from the surface. There is no heat source, no humidity control — just time.',
          "The main advantage of air drying is cost: it requires no machinery, no fuel, and minimal labour. The main disadvantage is time: depending on species and thickness, air drying can take months to years to bring timber to usable moisture levels. A 25mm board of rubberwood might take 3–4 months to reach 18–20% MC outdoors in Sri Lanka — and will rarely get below 15% without kiln drying.",
        ],
        list: [
          'Slow — typically months to years depending on species and thickness',
          'Cannot achieve consistent low MC (below 12–15%) without kiln finishing',
          'Subject to seasonal variation and ambient humidity',
          'Risk of surface mould, staining, and insect attack during drying',
          'Low capital cost, suitable for rough construction timber',
        ],
      },
      {
        heading: 'How Kiln Drying Works',
        paragraphs: [
          'Kiln drying uses a controlled environment — elevated temperature, humidity regulation, and airflow — to accelerate and control the drying process. Timber is loaded into a kiln chamber, and a drying schedule is programmed based on the species, thickness, and target moisture content. The schedule typically starts with higher humidity and lower heat to dry the surface slowly, then progressively reduces humidity and increases temperature to draw moisture from the core.',
          'The result is timber that reaches a precise target MC — typically 12–15% for furniture and joinery, or 15–18% for construction — in days rather than months, with far less degradation than uncontrolled drying. Kiln drying also kills insects and their eggs, providing pest protection as a by-product of the process.',
        ],
        list: [
          'Fast — typically 3 to 12 days depending on species and target MC',
          'Consistent, precise moisture content across the entire batch',
          'Reduces shrinkage, warping, and splitting in service',
          'Kills surface and internal insects at treatment temperatures',
          'Required for furniture, joinery, flooring, and export applications',
        ],
      },
      {
        heading: 'Which Method Should You Use?',
        paragraphs: [
          'For rough structural applications — roof purlins on a simple warehouse, scaffold planks, temporary hoarding — air-dried or partially dried timber may be acceptable, provided the structure allows for some movement and the timber grade is appropriate.',
          'For anything that requires dimensional stability — furniture, door and window frames, finished flooring, structural beams in tight-tolerance framing, or export timber — kiln drying is not a recommendation, it is a requirement. Timber that moves after installation costs more to fix than the drying would have cost in the first place.',
        ],
        note: "St. Xavier Timber's industrial kiln brings timber to a target MC of 12–15% with temperature and humidity monitoring throughout each cycle. We work with rubberwood, mahogany, teak, pine, and most domestic and imported hardwood species.",
      },
      {
        heading: 'Can Air-Dried Timber Be Kiln Finished?',
        paragraphs: [
          'Yes — and in some cases it makes economic sense. Timber that has been air-dried to 18–20% MC over several months can be loaded into a kiln for a shorter drying cycle to bring it to the final target MC. This reduces kiln time and fuel cost while still achieving a consistent, controlled result.',
          'For manufacturers running large volumes, combining air drying yards with kiln drying capacity is a practical approach to managing stock throughput. Talk to our team about your volume and timeline requirements — we can advise on the most cost-effective approach.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-vacuum-pressure-impregnation',
    title: 'What Is Vacuum Pressure Impregnation (VPI) and How Does It Protect Timber?',
    description:
      'VPI is the most thorough method available for deep-penetration timber preservation. Learn how the process works, what Boron Borax treatment does inside the wood, and why it carries a 10-year pest warranty.',
    date: '2026-04-28',
    readTime: '5 min read',
    category: 'Timber Treatment',
    tags: ['VPI', 'vacuum pressure impregnation', 'boron borax', 'termite treatment', 'wood preservation Sri Lanka', 'timber treatment'],
    sections: [
      {
        heading: 'Why Surface Treatment Is Not Enough',
        paragraphs: [
          'Timber preservation is often misunderstood. Most people are familiar with surface treatments — paints, varnishes, brush-applied preservatives — and assume that a coat of something on the outside will keep insects and fungi out. It will not. Termites and wood-boring beetles do not attack from the surface inward; they enter through joints, cut ends, and checks in the wood where surface coatings are absent or have failed.',
          'Effective preservation requires the active chemical to be present throughout the cross-section of the wood — not just on the surface. That is what Vacuum Pressure Impregnation achieves.',
        ],
      },
      {
        heading: 'How the VPI Process Works',
        paragraphs: [
          'VPI is a two-stage process carried out inside a sealed pressure vessel. In the first stage, a vacuum is applied to the timber load. This draws air and moisture out of the wood cells, creating space in the cellular structure for the preservative to enter. In the second stage, the vacuum is released and the chamber is flooded with the preservative solution — Boron Borax — under pressure up to 10 bar (145 PSI). The pressure forces the solution deep into the wood cells throughout the entire cross-section.',
          'After the pressure cycle, the excess solution is removed and the timber is allowed to dry and fix. The boron compounds bond with the wood fibres and become part of the material — they do not wash off, evaporate, or degrade over time under normal indoor or sheltered conditions.',
        ],
        list: [
          'Stage 1: Vacuum removes air from wood cells',
          'Stage 2: Boron Borax solution injected at up to 10 bar (145 PSI)',
          'Full cross-section penetration — not just surface treatment',
          'Chemical fixes within the wood and does not wash off indoors',
          'Timber remains workable — can be cut, drilled, and finished after treatment',
        ],
      },
      {
        heading: 'What Is Boron Borax and Why Is It Used?',
        paragraphs: [
          'Boron Borax (disodium octaborate tetrahydrate) is a water-soluble borate compound that is highly effective against a wide range of wood-destroying organisms — termites, powder post beetles, wood-boring beetles, and fungal decay. It works by disrupting the digestive systems of insects and inhibiting fungal spore germination.',
          'Unlike older timber preservatives based on arsenic, chromium, or creosote, Boron Borax is non-toxic to humans and animals at the concentrations used in timber treatment. It is environmentally inert, heavy-metal free, and is classified as a low-hazard preservative by international regulatory bodies. This makes it safe for use in residential construction, furniture, and indoor joinery.',
        ],
        note: 'Boron Borax treated timber is safe for use in homes, schools, and food-handling facilities. It is not suitable for ground contact or continuous water immersion — for those applications, alternative preservatives should be specified.',
      },
      {
        heading: 'What the 10-Year Warranty Covers',
        paragraphs: [
          'St. Xavier Timber provides a 10-year warranty against pest contamination on VPI-treated timber. This warranty covers failure caused by termites and wood-boring insects in timber that has been correctly treated to the specified retention level and installed in appropriate conditions (dry, sheltered, above-ground applications).',
          'The warranty is backed by treatment records for every batch — retention level, pressure cycle data, and timber species and dimensions — which we provide as documentation with each order. This documentation can be presented to architects, quantity surveyors, main contractors, or insurers as evidence of compliant treatment.',
        ],
      },
      {
        heading: 'Applications Best Suited to VPI Treatment',
        paragraphs: [
          "VPI treatment is appropriate for any timber application where long-term pest resistance is required. It is particularly important in Sri Lanka's tropical climate, where termite activity is widespread and building without treated timber significantly shortens the usable life of the structure.",
        ],
        list: [
          'Roof structures — rafters, purlins, wall plates, and ridge boards',
          'Floor joists and sub-floor framing',
          'Door and window frames and surrounding joinery',
          'Furniture, especially rubberwood which is highly susceptible to borers',
          'Feature timber in interior design — walls, ceilings, decorative screens',
          'Warehousing and storage structures',
        ],
      },
      {
        heading: 'VPI and Kiln Drying: Better Together',
        paragraphs: [
          'VPI treatment works most effectively when the timber has been kiln-dried first. Dry timber has lower initial moisture content, which means the preservative can penetrate more deeply and more evenly during the pressure cycle. Treating green or partially dried timber reduces both the retention level and the uniformity of penetration.',
          'At St. Xavier Timber, we operate both kiln drying and VPI under one roof, which means we can sequence the treatments correctly and carry out both on a single order. Timber that is kiln-dried and VPI-treated leaves our facility dimensionally stable, pest-resistant, and ready for installation.',
        ],
      },
    ],
  },
  {
    slug: 'why-furniture-manufacturers-need-kiln-dried-timber',
    title: 'Why Furniture Manufacturers Should Only Use Kiln-Dried Timber',
    description:
      'Warping, joint failure, and surface cracking in finished furniture almost always trace back to one cause: timber that was not properly dried before manufacture. Here is why kiln-dried timber at 12–15% MC is the only acceptable input for quality furniture production.',
    date: '2026-04-15',
    readTime: '4 min read',
    category: 'Industries',
    tags: ['furniture manufacturing', 'kiln drying', 'rubberwood treatment', 'moisture content', 'timber Sri Lanka', 'wood for furniture'],
    sections: [
      {
        heading: 'The Real Cause of Furniture Failures',
        paragraphs: [
          'Walk through any furniture manufacturing facility and ask the quality control team where most of their rejects come from. The answer — in the vast majority of cases — is not poor joinery, not bad finishing, and not substandard hardware. It is timber movement. Boards that warped between cutting and assembly. Panels that cupped after gluing. Joints that opened up after the piece was delivered.',
          'All of these failures share a common root cause: the timber was not at a stable moisture content when it was processed. Wood is hygroscopic — it absorbs and releases moisture from the surrounding air until it reaches equilibrium with its environment. If the timber used in manufacturing is at a higher MC than the environment it is installed in, it will dry out after manufacture and shrink as it does so. Shrinkage is not uniform, and the stresses it creates cause every failure mode described above.',
        ],
      },
      {
        heading: 'What Moisture Content Furniture Timber Should Be At',
        paragraphs: [
          "The target moisture content for furniture timber depends on the end environment. In Sri Lanka's interior conditions — air-conditioned offices and homes, typically at 60–70% relative humidity — timber stabilises at around 12–14% MC. Timber processed at this moisture content will be at or near equilibrium with its final environment and will move very little after manufacture.",
          'The industry standard for quality furniture manufacture is 12–15% MC. Timber above 15% will continue to dry and move after manufacture. Timber below 10% in a humid environment will absorb moisture and expand. The target range is narrow and cannot be reliably achieved without kiln drying.',
        ],
        list: [
          '12–15% MC: target range for furniture in Sri Lankan interior conditions',
          'Above 15%: timber will shrink and move post-manufacture',
          'Below 10%: timber may absorb moisture and swell in humid environments',
          'Air-dried timber in Sri Lanka rarely reaches below 15–18% MC consistently',
        ],
      },
      {
        heading: 'Why Rubberwood Needs Special Attention',
        paragraphs: [
          'Rubberwood (Hevea brasiliensis) is the dominant furniture timber in Sri Lanka and across much of Southeast Asia. It is fast-growing, widely available, takes finishes well, and machines cleanly. It also has two significant weaknesses: it is highly susceptible to staining and fungal degradation if dried too slowly, and it is extremely attractive to powder post beetles.',
          'For rubberwood, kiln drying serves two functions simultaneously. It reduces the moisture content to the target range for furniture manufacture, and it kills any beetle eggs or larvae present in the timber at the time of treatment. This is particularly important for rubberwood, where beetle infestation in the finished piece — visible as fine dust and small holes — is one of the most common customer complaints in the furniture industry.',
          'For maximum protection, rubberwood used in furniture should be both kiln-dried and VPI-treated. The VPI treatment provides ongoing protection against re-infestation after the piece leaves the factory.',
        ],
      },
      {
        heading: 'The Economics of Using Properly Dried Timber',
        paragraphs: [
          'The cost of kiln drying is often viewed as an additional expense rather than as a quality input. This framing is wrong. The real comparison is between the cost of drying and the cost of failures.',
          'A batch of furniture with a 5% reject rate due to warping or joint failure means 5% of the production cost was wasted — materials, labour, finishing, and handling, all spent on pieces that cannot be sold. Adding in replacement costs, delivery delays, and customer complaints, the downstream cost of a single batch made from poorly dried timber typically far exceeds what proper drying would have cost.',
        ],
        note: 'St. Xavier Timber supplies kiln-dried hardwood timber to furniture manufacturers across Sri Lanka. We work with rubberwood, mahogany, and imported hardwood species, and can process both small and large batches to your target MC.',
      },
      {
        heading: 'What to Ask Your Timber Supplier',
        paragraphs: [
          'When sourcing timber for furniture manufacture, ask your supplier three questions: What is the current moisture content of this timber? How was the moisture content measured? And what was the drying method used?',
          'A reputable kiln drying facility should be able to provide batch-level moisture content data as part of their standard documentation. If your supplier cannot answer these questions, the timber has not been kiln-dried to a controlled specification — and the risk of post-manufacture movement falls on you.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-the-right-timber-treatment',
    title: 'Kiln Drying or VPI — Which Timber Treatment Does Your Project Need?',
    description:
      'Kiln drying and VPI solve different problems. This guide explains what each treatment does, when to use them separately, when to combine them, and how to choose based on your specific application.',
    date: '2026-04-01',
    readTime: '5 min read',
    category: 'Timber Treatment',
    tags: ['kiln drying', 'VPI', 'timber treatment guide', 'wood preservation', 'timber treatment Sri Lanka'],
    sections: [
      {
        heading: 'Two Treatments, Two Different Problems',
        paragraphs: [
          'Kiln drying and Vacuum Pressure Impregnation are both timber treatment processes, but they address fundamentally different problems. Kiln drying removes moisture — it makes timber dimensionally stable, reduces weight, and prepares it for machining and finishing. VPI introduces a preservative — it makes timber resistant to insects and fungal decay. Neither treatment substitutes for the other.',
          'The confusion arises because both treatments are often applied to the same timber, and because a poorly treated batch of either type can cause similar-looking failures in service. Understanding what each treatment does — and does not do — is the starting point for specifying correctly.',
        ],
      },
      {
        heading: 'When Kiln Drying Alone Is Sufficient',
        paragraphs: [
          'Kiln drying alone is appropriate when the primary concern is dimensional stability and the pest risk in the application is low. This typically applies to furniture timber in dry, conditioned interiors where there is no history of termite activity; structural timber in well-ventilated, above-ground applications where the wood will stay dry; and timber components that will be fully encased in concrete, plaster, or other materials.',
          'It also applies to situations where the timber will be further treated after installation — for example, hardwood flooring that will receive multiple coats of penetrating oil, or exterior cladding that will be painted and maintained on a regular schedule.',
        ],
        list: [
          'Interior furniture in air-conditioned, low-pest-risk environments',
          'Decorative timber in dry, enclosed settings',
          'Timber components fully encased in other materials',
          'Wood that will receive ongoing, regular surface maintenance',
        ],
      },
      {
        heading: 'When VPI Treatment Is Essential',
        paragraphs: [
          "VPI treatment is essential whenever timber will be in an environment where termites or wood-boring insects are active — which, in Sri Lanka's tropical climate, means most outdoor and exposed-interior applications. It is also essential for timber species that are inherently susceptible to attack, particularly rubberwood.",
          "If the timber is structural — roof trusses, wall plates, floor joists — the cost of infestation is not just the value of the timber itself, but the cost of identifying the problem, replacing structural members, and making good the finishes and fixtures around them. VPI treatment on structural timber is a small fraction of that potential replacement cost.",
        ],
        list: [
          'All roof structural timber (rafters, purlins, wall plates)',
          'Floor joists and sub-floor framing',
          'Timber in areas with known or suspected termite activity',
          'Rubberwood furniture and joinery (high susceptibility to borers)',
          'Door and window frames in contact with masonry',
          'Any timber in contact with or near the ground',
        ],
      },
      {
        heading: 'When to Use Both Treatments Together',
        paragraphs: [
          'For most structural and semi-exposed applications in Sri Lanka, the correct answer is both treatments. Kiln drying first brings the timber to the target MC, which improves the penetration and retention of the VPI preservative in the subsequent treatment cycle. VPI on poorly dried timber gives significantly lower and less uniform preservative retention.',
          'Combined treatment is the standard specification for quality construction in Sri Lanka, and is what all reputable quantity surveyors and architects will specify for roof structures, floor framing, and joinery in any building intended to last. It is also what we recommend for all rubberwood furniture regardless of the intended environment.',
        ],
        note: 'St. Xavier Timber operates kiln drying and VPI under one roof, so both treatments can be applied to a single order as a combined process — no need to coordinate between separate suppliers.',
      },
      {
        heading: 'What About ISPM 15 Heat Treatment?',
        paragraphs: [
          'ISPM 15 heat treatment is a separate category entirely — it is a regulatory compliance treatment for wooden packaging materials used in international trade, not a structural preservation treatment. The 56°C core temperature requirement for ISPM 15 is effective at killing regulated organisms in wooden packaging, but it is not a substitute for VPI preservation in construction or furniture applications.',
          'If you are manufacturing export pallets or wooden packaging, you need ISPM 15 heat treatment from an IPPC-registered facility. If you are building with timber, you need kiln drying and/or VPI based on the application requirements above.',
        ],
      },
      {
        heading: 'Getting the Specification Right',
        paragraphs: [
          "The right treatment specification for your project depends on the species, the application, the environment, and the performance standard required. If you are unsure, the simplest rule of thumb for Sri Lankan conditions is: kiln dry everything, and VPI treat anything structural, any rubberwood, and any timber in exposed or high-humidity locations.",
          'Contact us with your timber species, dimensions, and intended application and we will advise on the appropriate treatment and provide a quote. We work with construction companies, furniture manufacturers, architects, and exporters, and we can turn most orders around within a few days.',
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
