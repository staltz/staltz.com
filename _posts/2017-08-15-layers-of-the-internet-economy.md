---
layout: post
title: "Layers of the internet economy"
tags: [blog]
---

What are the different ways businesses make money on the internet? What are the preconditions that made those possible? And the question which interests me most: what kind of businesses can support the new decentralized internet without exploiting its users or customers?

SoundCloud's recent financial struggle has made us in the [Scuttlebutt network talk about decentralization and business models](http://ssb.staltz.com/view/%25VStrS5HvTPcYfcx9zdGbiN9Q3/NUGgWBMtDDLm1X+/o=.sha256).

It has always bothered me that the marketplace-middleman business model is the most common one, and often arguably the most viable, given that the internet's crippled infrastructure (still largely based on IPv4 and NAT) makes true peer-to-peer impractical. Blockchain-based economies are picking up steam, and are genuinely disrupting some markets, but blockchain consensus isn't a silver bullet. For instance, for something like SoundCloud, which contains a social graph, it isn't necessary to have global consensus through a distributed ledger.

Instead of trying to fit a blockchain model into this problem, I decided to take a step back, zoom out, and think about how all the possible ways businesses can thrive in the digital economy. I shared these thoughts in the Scuttlebutt thread, and since then, I have refined them and now I want to articulate them properly in this blog post.

<h2 id="products" class="hr"><span class="hr">PRODUCTS</span></h2>

Four capabilities are necessary for the internet economy: Energy, Computers, Storage, and Connectivity.

The foundational business of the digital economy is hardware. Personal computers and smartphones are the canonical example of "Computer as a product", but hardware in other fields are also important and foundational: Storage (external hard drives, DVDs, USB sticks), Energy (solar panels), Connectivity (we don't have good examples of this, I'll come back to it later).

<svg width="600px" height="110px" viewBox="0 0 994 110" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M738.92213,-1.63424829e-13 L939.147784,-1.66156958e-14 L939.147784,-2.48689958e-14 C942.95277,-2.55679603e-14 946.428064,2.15937202 948.11338,5.57076845 L992.575661,95.5707685 L992.575661,95.5707685 C995.021858,100.52233 992.990858,106.519399 988.039297,108.965596 C986.661942,109.646044 985.146331,110 983.610065,110 L738.92213,110 L738.92213,110 C733.399283,110 728.92213,105.522847 728.92213,100 L728.92213,10 L728.92213,10 C728.92213,4.4771525 733.399283,-1.71292083e-13 738.92213,-1.72306613e-13 Z" id="path-1"></path>
        <rect id="path-2" x="504" y="0" width="210" height="110" rx="10"></rect>
        <rect id="path-3" x="279" y="0" width="210" height="110" rx="10"></rect>
        <path d="M54.9864821,6.31092401e-15 L253.950403,-5.04383861e-14 L253.950403,-5.32907052e-14 C259.473251,-6.90210692e-14 263.950403,4.4771525 263.950403,10 L263.950403,100 L263.950403,100 C263.950403,105.522847 259.473251,110 253.950403,110 L10,110 L10,110 C4.4771525,110 1.11910481e-13,105.522847 1.0658141e-13,100 C1.04805054e-13,98.447955 0.361261963,96.9172135 1.05519076,95.5289389 L46.0416729,5.52893887 L46.0416729,5.52893887 C47.7353795,2.14050786 51.1983287,2.34121533e-14 54.9864821,1.59872116e-14 Z" id="path-4"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(-260.000000, -896.000000)">
            <g id="products" transform="translate(260.000000, 896.000000)">
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-1"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M738.92213,1.5 C734.22771,1.5 730.42213,5.30557963 730.42213,10 L730.42213,100 C730.42213,104.69442 734.22771,108.5 738.92213,108.5 L983.610065,108.5 C984.915891,108.5 986.204161,108.199137 987.374912,107.620756 C991.583739,105.541489 993.310089,100.443981 991.230821,96.2351532 L946.76854,6.23515318 C945.336022,3.33546622 942.382022,1.5 939.147784,1.5 L738.92213,1.5 Z"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-2"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="1.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-3"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="1.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-4"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M54.9864821,1.5 C51.7665517,1.5 48.8230449,3.31943168 47.3833943,6.19959804 L2.39691214,96.199598 C1.80707267,97.3796315 1.5,98.6807618 1.5,100 C1.5,104.69442 5.30557963,108.5 10,108.5 L253.950403,108.5 C258.644824,108.5 262.450403,104.69442 262.450403,100 L262.450403,10 C262.450403,5.30557963 258.644824,1.5 253.950403,1.5 L54.9864821,1.5 Z"></path>
                </g>
                <text id="Connectivity-as-a-Pr" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="519.452" y="48">Connectivity</tspan>
                    <tspan x="536.63" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
                <text id="Computer-as-a-Produc" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="313.056" y="48">Computer</tspan>
                    <tspan x="311.13" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
                <text id="Storage-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="777" y="48">Storage</tspan>
                    <tspan x="777" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
                <text id="Energy-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="112.088" y="48">Energy</tspan>
                    <tspan x="65.26" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>

The important property of products is they don't require anything else to provide you value according to their value proposition. The best example is an external hard drive: once purchased, it gives you storage. You may need another product or resource to make it useful (like a computer and energy), but it does one thing, and does it well.

<h2 id="grid" class="hr"><span class="hr">GRID</span></h2>

The second layer, the Grid, builds on top of products and provides "remote products as a service". Energy as a Service (the energy grid) is the oldest such example, and is widely more common than Energy as a Product. Connectivity as a Service is the concept of Internet Service Provider. Storage and Computers as Services are typical data centers.

<svg width="600px" height="235px" viewBox="0 0 994 235" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M739,1.87846294e-13 L876.154539,3.55271368e-14 L876.154539,2.66453526e-14 C879.942361,3.60423284e-14 883.405068,2.14013813 885.098938,5.52811798 L930.095744,95.528118 L930.095744,95.528118 C932.565496,100.467973 930.563082,106.474647 925.623227,108.944399 C924.234738,109.638594 922.7037,110 921.151345,110 L739,110 L739,110 C733.477153,110 729,105.522847 729,100 L729,10 L729,10 C729,4.4771525 733.477153,2.03095414e-13 739,1.97175609e-13 Z" id="path-11"></path>
        <rect id="path-12" x="504" y="0" width="210" height="110" rx="10"></rect>
        <rect id="path-13" x="279" y="0" width="210" height="110" rx="10"></rect>
        <path d="M115.894411,0 L254.125383,0 L254.125383,0 C259.64823,0 264.125383,4.4771525 264.125383,10 L264.125383,100 L264.125383,100 C264.125383,105.522847 259.64823,110 254.125383,110 L71,110 L71,110 C65.4771525,110 61,105.522847 61,100 C61,98.450721 61.3599757,96.9226316 62.0515327,95.5362647 L106.945944,5.53626473 L106.945944,5.53626473 C108.638192,2.14380822 112.103308,0 115.894411,0 Z" id="path-14"></path>
        <path d="M738.92213,125 L939.147784,125 L939.147784,125 C942.95277,125 946.428064,127.159372 948.11338,130.570768 L992.575661,220.570768 L992.575661,220.570768 C995.021858,225.52233 992.990858,231.519399 988.039297,233.965596 C986.661942,234.646044 985.146331,235 983.610065,235 L738.92213,235 L738.92213,235 C733.399283,235 728.92213,230.522847 728.92213,225 L728.92213,135 L728.92213,135 C728.92213,129.477153 733.399283,125 738.92213,125 Z" id="path-15"></path>
        <rect id="path-16" x="504" y="125" width="210" height="110" rx="10"></rect>
        <rect id="path-17" x="279" y="125" width="210" height="110" rx="10"></rect>
        <path d="M54.9864821,125 L253.950403,125 L253.950403,125 C259.473251,125 263.950403,129.477153 263.950403,135 L263.950403,225 L263.950403,225 C263.950403,230.522847 259.473251,235 253.950403,235 L10,235 L10,235 C4.4771525,235 1.11910481e-13,230.522847 1.0658141e-13,225 C1.04805054e-13,223.447955 0.361261963,221.917213 1.05519076,220.528939 L46.0416729,130.528939 L46.0416729,130.528939 C47.7353795,127.140508 51.1983287,125 54.9864821,125 Z" id="path-18"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(-260.000000, -771.000000)">
            <g id="grid-and-products" transform="translate(260.000000, 771.000000)">
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-11"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M739,1.5 C734.30558,1.5 730.5,5.30557963 730.5,10 L730.5,100 C730.5,104.69442 734.30558,108.5 739,108.5 L921.151345,108.5 C922.470846,108.5 923.772229,108.192805 924.952444,107.602739 C929.151321,105.50345 930.853373,100.397777 928.754084,96.1989003 L883.757278,6.19890029 C882.317488,3.31911741 879.374188,1.5 876.154539,1.5 L739,1.5 Z"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-12"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="1.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-13"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="1.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-14"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M115.894411,1.5 C112.671974,1.5 109.726625,3.32223699 108.288214,6.20582502 L63.3938028,96.205825 C62.8059794,97.3842369 62.5,98.683113 62.5,100 C62.5,104.69442 66.3055796,108.5 71,108.5 L254.125383,108.5 C258.819803,108.5 262.625383,104.69442 262.625383,100 L262.625383,10 C262.625383,5.30557963 258.819803,1.5 254.125383,1.5 L115.894411,1.5 Z"></path>
                </g>
                <text id="Connectivity-as-a-Se" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="518.452" y="48">Connectivity</tspan>
                    <tspan x="540.054" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Energy-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="132.088" y="50">Energy</tspan>
                    <tspan x="94.108" y="90" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Computers-as-a-Servi" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="306.468" y="48">Computers</tspan>
                    <tspan x="316.054" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Storage-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="757" y="48">Storage</tspan>
                    <tspan x="757" y="88" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-15" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M738.92213,126.5 C734.22771,126.5 730.42213,130.30558 730.42213,135 L730.42213,225 C730.42213,229.69442 734.22771,233.5 738.92213,233.5 L983.610065,233.5 C984.915891,233.5 986.204161,233.199137 987.374912,232.620756 C991.583739,230.541489 993.310089,225.443981 991.230821,221.235153 L946.76854,131.235153 C945.336022,128.335466 942.382022,126.5 939.147784,126.5 L738.92213,126.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-16" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="126.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-17" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="126.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-18" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M54.9864821,126.5 C51.7665517,126.5 48.8230449,128.319432 47.3833943,131.199598 L2.39691214,221.199598 C1.80707267,222.379631 1.5,223.680762 1.5,225 C1.5,229.69442 5.30557963,233.5 10,233.5 L253.950403,233.5 C258.644824,233.5 262.450403,229.69442 262.450403,225 L262.450403,135 C262.450403,130.30558 258.644824,126.5 253.950403,126.5 L54.9864821,126.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <text id="Connectivity-as-a-Pr" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="519.452" y="173" style="fill-opacity: 0.3;">Connectivity</tspan>
                    <tspan x="536.63" y="213" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Computer-as-a-Produc" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="313.056" y="173" style="fill-opacity: 0.3;">Computer</tspan>
                    <tspan x="311.13" y="213" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Storage-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="777" y="173" style="fill-opacity: 0.3;">Storage</tspan>
                    <tspan x="777" y="213" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Energy-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="112.088" y="173" style="fill-opacity: 0.3;">Energy</tspan>
                    <tspan x="65.26" y="213" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>

While most capabilities in the Grid layer can also be obtained directly from (B2B or B2C) products, some aspects like Connectivity are only available in the Grid, not as a consumer product. We currently don't have a product which allows you to get on the internet. Even satellite-based internet access requires a subscription.

<h2 id="cloud" class="hr"><span class="hr">CLOUD</span></h2>

The subsequent layers comprise the Cloud economy: IaaS, PaaS, SaaS. While Grid businesses manage real world infrastructure (often as public utility), Cloud businesses reutilize Grid services in the realm of Software only. Even IaaS is just *Software Infrastructure* as a Service.

<svg width="600px" height="440px" viewBox="0 0 994 611" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M180.097772,251 L814.016785,251 L814.016785,251 C817.814452,251 821.284383,253.15116 822.973368,256.552571 L867.663243,346.552571 L867.663243,346.552571 C870.11949,351.499156 868.100672,357.500336 863.154088,359.956583 C861.771975,360.642877 860.249785,361 858.70666,361 L135.223934,361 L135.223934,361 C129.701087,361 125.223934,356.522847 125.223934,351 C125.223934,349.45134 125.583623,347.923843 126.27465,346.537903 L171.148488,256.537903 L171.148488,256.537903 C172.840409,253.144546 176.306009,251 180.097772,251 Z" id="path-111"></path>
        <path d="M242.914237,126 L750.992582,126 L750.992582,126 C754.782469,126 758.246692,128.142447 759.939542,131.533244 L804.871907,221.533244 L804.871907,221.533244 C807.338828,226.474513 805.332973,232.480038 800.391704,234.94696 C799.00455,235.639494 797.475367,236 795.924947,236 L198.263312,236 L198.263312,236 C192.740464,236 188.263312,231.522847 188.263312,226 C188.263312,224.458048 188.619892,222.936982 189.305185,221.555682 L233.95611,131.555682 L233.95611,131.555682 C235.64447,128.152563 239.115319,126 242.914237,126 Z" id="path-112"></path>
        <path d="M305.757992,2.84217094e-14 L688.859312,2.84217094e-14 L688.859312,8.8817842e-15 C692.656414,8.18426793e-15 696.125931,2.15052647 697.815198,5.55116734 L742.522662,95.5511673 L742.522662,95.5511673 C744.979685,100.497366 742.961809,106.498863 738.015609,108.955886 C736.63313,109.642632 735.110432,110 733.566777,110 L261.296788,110 L261.296788,110 C255.77394,110 251.296788,105.522847 251.296788,100 C251.296788,98.4637662 251.650729,96.9481863 252.331149,95.5708546 L296.792354,5.57085465 L296.792354,5.57085465 C298.477653,2.15941094 301.952972,3.08970372e-14 305.757992,3.01980663e-14 Z" id="path-113"></path>
        <path d="M739,376 L876.154539,376 L876.154539,376 C879.942361,376 883.405068,378.140138 885.098938,381.528118 L930.095744,471.528118 L930.095744,471.528118 C932.565496,476.467973 930.563082,482.474647 925.623227,484.944399 C924.234738,485.638594 922.7037,486 921.151345,486 L739,486 L739,486 C733.477153,486 729,481.522847 729,476 L729,386 L729,386 C729,380.477153 733.477153,376 739,376 Z" id="path-114"></path>
        <rect id="path-115" x="504" y="376" width="210" height="110" rx="10"></rect>
        <rect id="path-116" x="279" y="376" width="210" height="110" rx="10"></rect>
        <path d="M115.894411,378 L254.125383,378 L254.125383,378 C259.64823,378 264.125383,382.477153 264.125383,388 L264.125383,478 L264.125383,478 C264.125383,483.522847 259.64823,488 254.125383,488 L71,488 L71,488 C65.4771525,488 61,483.522847 61,478 C61,476.450721 61.3599757,474.922632 62.0515327,473.536265 L106.945944,383.536265 L106.945944,383.536265 C108.638192,380.143808 112.103308,378 115.894411,378 Z" id="path-117"></path>
        <path d="M738.92213,501 L939.147784,501 L939.147784,501 C942.95277,501 946.428064,503.159372 948.11338,506.570768 L992.575661,596.570768 L992.575661,596.570768 C995.021858,601.52233 992.990858,607.519399 988.039297,609.965596 C986.661942,610.646044 985.146331,611 983.610065,611 L738.92213,611 L738.92213,611 C733.399283,611 728.92213,606.522847 728.92213,601 L728.92213,511 L728.92213,511 C728.92213,505.477153 733.399283,501 738.92213,501 Z" id="path-118"></path>
        <rect id="path-119" x="504" y="501" width="210" height="110" rx="10"></rect>
        <rect id="path-1110" x="279" y="501" width="210" height="110" rx="10"></rect>
        <path d="M54.9864821,501 L253.950403,501 L253.950403,501 C259.473251,501 263.950403,505.477153 263.950403,511 L263.950403,601 L263.950403,601 C263.950403,606.522847 259.473251,611 253.950403,611 L10,611 L10,611 C4.4771525,611 1.11910481e-13,606.522847 1.0658141e-13,601 C1.04805054e-13,599.447955 0.361261963,597.917213 1.05519076,596.528939 L46.0416729,506.528939 L46.0416729,506.528939 C47.7353795,503.140508 51.1983287,501 54.9864821,501 Z" id="path-1111"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(-260.000000, -395.000000)">
            <g id="cloud" transform="translate(260.000000, 395.000000)">
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-111"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M180.097772,252.5 C176.874774,252.5 173.929014,254.322864 172.490881,257.207217 L127.617042,347.207217 C127.029669,348.385266 126.723934,349.683639 126.723934,351 C126.723934,355.69442 130.529514,359.5 135.223934,359.5 L858.70666,359.5 C860.018316,359.5 861.312178,359.196445 862.486974,358.613096 C866.69157,356.525286 868.407565,351.424282 866.319755,347.219686 L821.629881,257.219686 C820.194243,254.328486 817.244802,252.5 814.016785,252.5 L180.097772,252.5 Z"></path>
                </g>
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-112"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M242.914237,127.5 C239.685157,127.5 236.734935,129.329678 235.299829,132.222329 L190.648904,222.222329 C190.066405,223.396435 189.763312,224.68934 189.763312,226 C189.763312,230.69442 193.568891,234.5 198.263312,234.5 L795.924947,234.5 C797.242804,234.5 798.542609,234.19357 799.72169,233.604916 C803.921769,231.508033 805.626746,226.403336 803.529863,222.203257 L758.597498,132.203257 C757.158576,129.32108 754.213986,127.5 750.992582,127.5 L242.914237,127.5 Z"></path>
                </g>
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-113"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M305.757992,1.5 C302.523725,1.5 299.569704,3.3354993 298.1372,6.23522645 L253.675995,96.2352264 C253.097638,97.4059583 252.796788,98.6942013 252.796788,100 C252.796788,104.69442 256.602367,108.5 261.296788,108.5 L733.566777,108.5 C734.878883,108.5 736.173177,108.196237 737.348285,107.612503 C741.552554,105.524034 743.267749,100.422761 741.17928,96.2184922 L696.471815,6.21849224 C695.035938,3.3279475 692.086849,1.5 688.859312,1.5 L305.757992,1.5 Z"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-114" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M739,377.5 C734.30558,377.5 730.5,381.30558 730.5,386 L730.5,476 C730.5,480.69442 734.30558,484.5 739,484.5 L921.151345,484.5 C922.470846,484.5 923.772229,484.192805 924.952444,483.602739 C929.151321,481.50345 930.853373,476.397777 928.754084,472.1989 L883.757278,382.1989 C882.317488,379.319117 879.374188,377.5 876.154539,377.5 L739,377.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-115" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="377.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-116" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="377.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-117" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M115.894411,379.5 C112.671974,379.5 109.726625,381.322237 108.288214,384.205825 L63.3938028,474.205825 C62.8059794,475.384237 62.5,476.683113 62.5,478 C62.5,482.69442 66.3055796,486.5 71,486.5 L254.125383,486.5 C258.819803,486.5 262.625383,482.69442 262.625383,478 L262.625383,388 C262.625383,383.30558 258.819803,379.5 254.125383,379.5 L115.894411,379.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <text id="Infrastructure-as-a" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="315.096" y="317">Infrastructure </tspan>
                    <tspan x="522.456" y="317" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Platform-as-a-Servic" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="352.088" y="192">Platform </tspan>
                    <tspan x="485.464" y="192" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Software-as-a-Servic" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="351.048" y="66">Software </tspan>
                    <tspan x="486.504" y="66" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Connectivity-as-a-Se" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="519.452" y="424" style="fill-opacity: 0.3;">Connectivity</tspan>
                    <tspan x="541.054" y="464" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Energy-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="132.088" y="426" style="fill-opacity: 0.3;">Energy</tspan>
                    <tspan x="94.108" y="466" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Computers-as-a-Servi" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="306.468" y="424" style="fill-opacity: 0.3;">Computers</tspan>
                    <tspan x="316.054" y="464" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Storage-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="757" y="424" style="fill-opacity: 0.3;">Storage</tspan>
                    <tspan x="757" y="464" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-118" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M738.92213,502.5 C734.22771,502.5 730.42213,506.30558 730.42213,511 L730.42213,601 C730.42213,605.69442 734.22771,609.5 738.92213,609.5 L983.610065,609.5 C984.915891,609.5 986.204161,609.199137 987.374912,608.620756 C991.583739,606.541489 993.310089,601.443981 991.230821,597.235153 L946.76854,507.235153 C945.336022,504.335466 942.382022,502.5 939.147784,502.5 L738.92213,502.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-119" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="502.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-1110" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="502.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-1111" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M54.9864821,502.5 C51.7665517,502.5 48.8230449,504.319432 47.3833943,507.199598 L2.39691214,597.199598 C1.80707267,598.379631 1.5,599.680762 1.5,601 C1.5,605.69442 5.30557963,609.5 10,609.5 L253.950403,609.5 C258.644824,609.5 262.450403,605.69442 262.450403,601 L262.450403,511 C262.450403,506.30558 258.644824,502.5 253.950403,502.5 L54.9864821,502.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <text id="Connectivity-as-a-Pr" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="519.452" y="549" style="fill-opacity: 0.3;">Connectivity</tspan>
                    <tspan x="536.63" y="589" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Computer-as-a-Produc" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="313.056" y="549" style="fill-opacity: 0.3;">Computer</tspan>
                    <tspan x="311.13" y="589" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Storage-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="777" y="549" style="fill-opacity: 0.3;">Storage</tspan>
                    <tspan x="777" y="589" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Energy-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="112.088" y="549" style="fill-opacity: 0.3;">Energy</tspan>
                    <tspan x="65.26" y="589" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>

Plenty has been written about the Cloud economy so I'm not going to bore you with details about this layer. Amazon AWS, Google Cloud, and Microsoft Azure dominate this space.

<h2 id="bigdata" class="hr"><span class="hr">BIG DATA</span></h2>

The top layer can be understood as the Big Data layer, comprising of businesses in the realm of [surveillance capitalism](https://en.wikipedia.org/wiki/Surveillance_capitalism) which engage in data mining, user behavior analytics, metadata collection, etc. These often come from SaaS such as Gmail, Facebook, Google Translate, etc.

<svg width="600px" height="650px" viewBox="0 0 994 994" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M180.097772,634 L814.016785,634 L814.016785,634 C817.814452,634 821.284383,636.15116 822.973368,639.552571 L867.663243,729.552571 L867.663243,729.552571 C870.11949,734.499156 868.100672,740.500336 863.154088,742.956583 C861.771975,743.642877 860.249785,744 858.70666,744 L135.223934,744 L135.223934,744 C129.701087,744 125.223934,739.522847 125.223934,734 C125.223934,732.45134 125.583623,730.923843 126.27465,729.537903 L171.148488,639.537903 L171.148488,639.537903 C172.840409,636.144546 176.306009,634 180.097772,634 Z" id="path-bd1"></path>
        <path d="M242.914237,509 L750.992582,509 L750.992582,509 C754.782469,509 758.246692,511.142447 759.939542,514.533244 L804.871907,604.533244 L804.871907,604.533244 C807.338828,609.474513 805.332973,615.480038 800.391704,617.94696 C799.00455,618.639494 797.475367,619 795.924947,619 L198.263312,619 L198.263312,619 C192.740464,619 188.263312,614.522847 188.263312,609 C188.263312,607.458048 188.619892,605.936982 189.305185,604.555682 L233.95611,514.555682 L233.95611,514.555682 C235.64447,511.152563 239.115319,509 242.914237,509 Z" id="path-bd2"></path>
        <path d="M305.757992,383 L688.859312,383 L688.859312,383 C692.656414,383 696.125931,385.150526 697.815198,388.551167 L742.522662,478.551167 L742.522662,478.551167 C744.979685,483.497366 742.961809,489.498863 738.015609,491.955886 C736.63313,492.642632 735.110432,493 733.566777,493 L261.296788,493 L261.296788,493 C255.77394,493 251.296788,488.522847 251.296788,483 C251.296788,481.463766 251.650729,479.948186 252.331149,478.570855 L296.792354,388.570855 L296.792354,388.570855 C298.477653,385.159411 301.952972,383 305.757992,383 Z" id="path-bd3"></path>
        <path d="M739,759 L876.154539,759 L876.154539,759 C879.942361,759 883.405068,761.140138 885.098938,764.528118 L930.095744,854.528118 L930.095744,854.528118 C932.565496,859.467973 930.563082,865.474647 925.623227,867.944399 C924.234738,868.638594 922.7037,869 921.151345,869 L739,869 L739,869 C733.477153,869 729,864.522847 729,859 L729,769 L729,769 C729,763.477153 733.477153,759 739,759 Z" id="path-bd4"></path>
        <rect id="path-bd5" x="509" y="759" width="210" height="110" rx="10"></rect>
        <rect id="path-bd6" x="279" y="759" width="210" height="110" rx="10"></rect>
        <path d="M115.894411,761 L254.125383,761 L254.125383,761 C259.64823,761 264.125383,765.477153 264.125383,771 L264.125383,861 L264.125383,861 C264.125383,866.522847 259.64823,871 254.125383,871 L71,871 L71,871 C65.4771525,871 61,866.522847 61,861 C61,859.450721 61.3599757,857.922632 62.0515327,856.536265 L106.945944,766.536265 L106.945944,766.536265 C108.638192,763.143808 112.103308,761 115.894411,761 Z" id="path-bd7"></path>
        <path d="M367.753409,260 L627.741331,260 L627.741331,260 C631.545259,260 635.019779,262.158185 636.705627,265.568139 L681.200755,355.568139 L681.200755,355.568139 C683.648404,360.518983 681.619164,366.516647 676.66832,368.964296 C675.290277,369.645587 673.773716,370 672.236459,370 L322.832351,370 L322.832351,370 C317.309504,370 312.832351,365.522847 312.832351,360 C312.832351,358.449921 313.192699,356.921063 313.884943,355.534144 L358.806,265.534144 L358.806,265.534144 C360.498671,262.142853 363.963159,260 367.753409,260 Z" id="path-bd8"></path>
        <path d="M505.899829,5.53887519 L569.525792,133.104476 L569.525792,133.104476 C569.529012,133.110932 569.532225,133.117392 569.535432,133.123855 L616.933171,228.670207 L616.933171,228.670207 C619.387499,233.617744 617.366354,239.61814 612.418817,242.072468 C611.037612,242.757643 609.516678,243.11416 607.974863,243.11416 L386,243.11416 L386,243.11416 C380.477153,243.11416 376,238.637008 376,233.11416 C376,231.569044 376.358045,230.044944 377.04604,228.661453 L487.997201,5.54949995 L487.997201,5.54949995 C490.456363,0.604364476 496.458733,-1.4109149 501.403868,1.04824748 C503.350904,2.01648751 504.929279,3.59298963 505.899829,5.53887519 Z" id="path-bd9"></path>
        <path d="M738.92213,884 L939.147784,884 L939.147784,884 C942.95277,884 946.428064,886.159372 948.11338,889.570768 L992.575661,979.570768 L992.575661,979.570768 C995.021858,984.52233 992.990858,990.519399 988.039297,992.965596 C986.661942,993.646044 985.146331,994 983.610065,994 L738.92213,994 L738.92213,994 C733.399283,994 728.92213,989.522847 728.92213,984 L728.92213,894 L728.92213,894 C728.92213,888.477153 733.399283,884 738.92213,884 Z" id="path-bd10"></path>
        <rect id="path-bd11" x="504" y="884" width="210" height="110" rx="10"></rect>
        <rect id="path-bd12" x="279" y="884" width="210" height="110" rx="10"></rect>
        <path d="M54.9864821,884 L253.950403,884 L253.950403,884 C259.473251,884 263.950403,888.477153 263.950403,894 L263.950403,984 L263.950403,984 C263.950403,989.522847 259.473251,994 253.950403,994 L10,994 L10,994 C4.4771525,994 1.11910481e-13,989.522847 1.0658141e-13,984 C1.04805054e-13,982.447955 0.361261963,980.917213 1.05519076,979.528939 L46.0416729,889.528939 L46.0416729,889.528939 C47.7353795,886.140508 51.1983287,884 54.9864821,884 Z" id="path-bd13"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="all" transform="translate(-260.000000, -12.000000)">
            <g id="bigdata" transform="translate(260.000000, 12.000000)">
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd1" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M180.097772,635.5 C176.874774,635.5 173.929014,637.322864 172.490881,640.207217 L127.617042,730.207217 C127.029669,731.385266 126.723934,732.683639 126.723934,734 C126.723934,738.69442 130.529514,742.5 135.223934,742.5 L858.70666,742.5 C860.018316,742.5 861.312178,742.196445 862.486974,741.613096 C866.69157,739.525286 868.407565,734.424282 866.319755,730.219686 L821.629881,640.219686 C820.194243,637.328486 817.244802,635.5 814.016785,635.5 L180.097772,635.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd2" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M242.914237,510.5 C239.685157,510.5 236.734935,512.329678 235.299829,515.222329 L190.648904,605.222329 C190.066405,606.396435 189.763312,607.68934 189.763312,609 C189.763312,613.69442 193.568891,617.5 198.263312,617.5 L795.924947,617.5 C797.242804,617.5 798.542609,617.19357 799.72169,616.604916 C803.921769,614.508033 805.626746,609.403336 803.529863,605.203257 L758.597498,515.203257 C757.158576,512.32108 754.213986,510.5 750.992582,510.5 L242.914237,510.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd3" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M305.757992,384.5 C302.523725,384.5 299.569704,386.335499 298.1372,389.235226 L253.675995,479.235226 C253.097638,480.405958 252.796788,481.694201 252.796788,483 C252.796788,487.69442 256.602367,491.5 261.296788,491.5 L733.566777,491.5 C734.878883,491.5 736.173177,491.196237 737.348285,490.612503 C741.552554,488.524034 743.267749,483.422761 741.17928,479.218492 L696.471815,389.218492 C695.035938,386.327947 692.086849,384.5 688.859312,384.5 L305.757992,384.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd4" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M739,760.5 C734.30558,760.5 730.5,764.30558 730.5,769 L730.5,859 C730.5,863.69442 734.30558,867.5 739,867.5 L921.151345,867.5 C922.470846,867.5 923.772229,867.192805 924.952444,866.602739 C929.151321,864.50345 930.853373,859.397777 928.754084,855.1989 L883.757278,765.1989 C882.317488,762.319117 879.374188,760.5 876.154539,760.5 L739,760.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd5" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="510.5" y="760.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd6" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="760.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd7" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M115.894411,762.5 C112.671974,762.5 109.726625,764.322237 108.288214,767.205825 L63.3938028,857.205825 C62.8059794,858.384237 62.5,859.683113 62.5,861 C62.5,865.69442 66.3055796,869.5 71,869.5 L254.125383,869.5 C258.819803,869.5 262.625383,865.69442 262.625383,861 L262.625383,771 C262.625383,766.30558 258.819803,762.5 254.125383,762.5 L115.894411,762.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle-3">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd8"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M367.753409,261.5 C364.531697,261.5 361.586881,263.321425 360.148111,266.204022 L315.227054,356.204022 C314.638647,357.382904 314.332351,358.682433 314.332351,360 C314.332351,364.69442 318.137931,368.5 322.832351,368.5 L672.236459,368.5 C673.543127,368.5 674.832205,368.198749 676.003541,367.619652 C680.211758,365.53915 681.936612,360.441135 679.856111,356.232918 L635.360982,266.232918 C633.928011,263.334457 630.97467,261.5 627.741331,261.5 L367.753409,261.5 Z"></path>
                </g>
                <g id="Rectangle-3">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd9"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M504.557529,6.20837501 C503.732561,4.55437229 502.390943,3.21434548 500.735962,2.39134145 C496.532597,0.301053432 491.430583,2.0140409 489.340295,6.21740606 L378.389134,229.329359 C377.804338,230.505327 377.5,231.800811 377.5,233.11416 C377.5,237.808581 381.30558,241.61416 386,241.61416 L607.974863,241.61416 C609.285406,241.61416 610.578199,241.311121 611.752224,240.728722 C615.95763,238.642543 617.675603,233.542206 615.589425,229.3368 L568.191685,133.790448 C568.187595,133.782209 568.187595,133.782209 568.183492,133.773976 L504.557529,6.20837501 Z"></path>
                </g>
                <text id="Infrastructure-as-a" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="315.096" y="700" style="fill-opacity: 0.3;">Infrastructure </tspan>
                    <tspan x="522.456" y="700" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Platform-as-a-Servic" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="352.088" y="575" style="fill-opacity: 0.3;">Platform </tspan>
                    <tspan x="485.464" y="575" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Software-as-a-Servic" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="351.048" y="449" style="fill-opacity: 0.3;">Software </tspan>
                    <tspan x="486.504" y="449" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Connectivity-as-a-Se" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="523.452" y="807" style="fill-opacity: 0.3;">Connectivity</tspan>
                    <tspan x="545.054" y="847" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Energy-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="132.088" y="809" style="fill-opacity: 0.3;">Energy</tspan>
                    <tspan x="94.108" y="849" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Computers-as-a-Servi" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="306.468" y="807" style="fill-opacity: 0.3;">Computers</tspan>
                    <tspan x="316.054" y="847" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <text id="Data-as-a-Resource" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="368.648" y="326">Data </tspan>
                    <tspan x="442.056" y="326" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Resource</tspan>
                </text>
                <text id="AI-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="483.516" y="152">AI </tspan>
                    <tspan x="419.276" y="192" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Storage-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="757" y="807" style="fill-opacity: 0.3;">Storage</tspan>
                    <tspan x="757" y="847" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Service</tspan>
                </text>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd10" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M738.92213,885.5 C734.22771,885.5 730.42213,889.30558 730.42213,894 L730.42213,984 C730.42213,988.69442 734.22771,992.5 738.92213,992.5 L983.610065,992.5 C984.915891,992.5 986.204161,992.199137 987.374912,991.620756 C991.583739,989.541489 993.310089,984.443981 991.230821,980.235153 L946.76854,890.235153 C945.336022,887.335466 942.382022,885.5 939.147784,885.5 L738.92213,885.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd11" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="885.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd12" style="fill-opacity: 0.3;"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="885.5" width="207" height="107" rx="10" style="stroke-opacity: 0.3;"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-bd13" style="fill-opacity: 0.3;"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M54.9864821,885.5 C51.7665517,885.5 48.8230449,887.319432 47.3833943,890.199598 L2.39691214,980.199598 C1.80707267,981.379631 1.5,982.680762 1.5,984 C1.5,988.69442 5.30557963,992.5 10,992.5 L253.950403,992.5 C258.644824,992.5 262.450403,988.69442 262.450403,984 L262.450403,894 C262.450403,889.30558 258.644824,885.5 253.950403,885.5 L54.9864821,885.5 Z" style="stroke-opacity: 0.3;"></path>
                </g>
                <text id="Connectivity-as-a-Pr" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="519.452" y="932" style="fill-opacity: 0.3;">Connectivity</tspan>
                    <tspan x="536.63" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Computer-as-a-Produc" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="313.056" y="932" style="fill-opacity: 0.3;">Computer</tspan>
                    <tspan x="311.13" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Storage-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="777" y="932" style="fill-opacity: 0.3;">Storage</tspan>
                    <tspan x="777" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
                <text id="Energy-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="112.088" y="932" style="fill-opacity: 0.3;">Energy</tspan>
                    <tspan x="65.26" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal" style="fill-opacity: 0.3;">as a Product</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>

In this layer, the ["Data is Gold"](https://www.forbes.com/sites/bradpeters/2012/06/21/the-big-data-gold-rush/#51e4c304b247) mantra demonstrates how data is a resource to be used to extract valuable insights. In the recent years, data is used as fuel for Machine Learning. Most Artificial Intelligence systems require training data to adjust the model to expected behaviors.

Alongside cryptocurrencies and crypto tokens, data represents the emergence of the economy of *software feedstock*. First came analytics and data mining, and now we are witnessing the early years of AI.

<h2 id="bigdata" class="hr"><span class="hr">OFF GRID</span></h2>

Off Grid is the lifestyle based only on the Product layer, without accessing higher layers, due to restrictive environments, ideology or other reasons.

As an ideology, Off-the-grid is desireable because it maximizes self-sufficiency. The internet economy so far has had very weak products for Energy and Connectivity. On the other hand, Computers and Storage have evolved immensely for consumers: even low-end smartphones are more powerful than computers used to launch rockets in the 1970s, and a cheap USB stick can hold much more data than expensive storage systems of the past. Humans are self-sufficient in computing and storage, and this in itself has greatly contributed to distribute "power".

The lack of self-sufficiency for Connectivity and Energy has made us dependent on the Grid. Over time, additional layers were built on top of the Grid and in other ways we have come to depend on the Cloud and Big Data. If the Grid, the Cloud, and Big Data turn against the people even partially, we don't have much choice because we can't choose to be self-sufficient in all four capabilities.

Many businesses for the new decentralized internet, mostly cryptocurrency-based applications and services, don't recognize how centralization still plays a huge role in Connectivity and Energy. For instance, if a country ends up having a single Internet Service Provider, it's enough that this ISP blocks traffic related to the decentralized application (such as Bitcoin or Ethereum) to kill the application. Also, a huge portion of the Bitcoin network clings on [Chinese miners who get their energy from private hydropower stations](https://news.bitcoin.com/brief-glimpse-lives-chinese-bitcoin-miners/).

The new decentralized internet is incomplete before we can be easily and viably self-sufficient in all four capabilities. Currently, consumer Connectivity Products are weak or non-existent (a great promising example, though, is [goTenna](http://gotenna.com/)), and consumer Energy Products are starting to pick up steam with the sales of personal solar panels.

Businesses that sell hardware will support the new decentralized internet, increasing people's self-sufficiency and (literally) empowering them instead of exploiting them.

<svg width="600px" height="550px" viewBox="0 0 1250 997" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path d="M180.097772,634 L814.016785,634 L814.016785,634 C817.814452,634 821.284383,636.15116 822.973368,639.552571 L867.663243,729.552571 L867.663243,729.552571 C870.11949,734.499156 868.100672,740.500336 863.154088,742.956583 C861.771975,743.642877 860.249785,744 858.70666,744 L135.223934,744 L135.223934,744 C129.701087,744 125.223934,739.522847 125.223934,734 C125.223934,732.45134 125.583623,730.923843 126.27465,729.537903 L171.148488,639.537903 L171.148488,639.537903 C172.840409,636.144546 176.306009,634 180.097772,634 Z" id="path-all1"></path>
        <path d="M242.914237,509 L750.992582,509 L750.992582,509 C754.782469,509 758.246692,511.142447 759.939542,514.533244 L804.871907,604.533244 L804.871907,604.533244 C807.338828,609.474513 805.332973,615.480038 800.391704,617.94696 C799.00455,618.639494 797.475367,619 795.924947,619 L198.263312,619 L198.263312,619 C192.740464,619 188.263312,614.522847 188.263312,609 C188.263312,607.458048 188.619892,605.936982 189.305185,604.555682 L233.95611,514.555682 L233.95611,514.555682 C235.64447,511.152563 239.115319,509 242.914237,509 Z" id="path-all2"></path>
        <path d="M305.757992,383 L688.859312,383 L688.859312,383 C692.656414,383 696.125931,385.150526 697.815198,388.551167 L742.522662,478.551167 L742.522662,478.551167 C744.979685,483.497366 742.961809,489.498863 738.015609,491.955886 C736.63313,492.642632 735.110432,493 733.566777,493 L261.296788,493 L261.296788,493 C255.77394,493 251.296788,488.522847 251.296788,483 C251.296788,481.463766 251.650729,479.948186 252.331149,478.570855 L296.792354,388.570855 L296.792354,388.570855 C298.477653,385.159411 301.952972,383 305.757992,383 Z" id="path-all3"></path>
        <path d="M739,759 L876.154539,759 L876.154539,759 C879.942361,759 883.405068,761.140138 885.098938,764.528118 L930.095744,854.528118 L930.095744,854.528118 C932.565496,859.467973 930.563082,865.474647 925.623227,867.944399 C924.234738,868.638594 922.7037,869 921.151345,869 L739,869 L739,869 C733.477153,869 729,864.522847 729,859 L729,769 L729,769 C729,763.477153 733.477153,759 739,759 Z" id="path-all4"></path>
        <rect id="path-all5" x="509" y="759" width="210" height="110" rx="10"></rect>
        <rect id="path-all6" x="279" y="759" width="210" height="110" rx="10"></rect>
        <path d="M115.894411,761 L254.125383,761 L254.125383,761 C259.64823,761 264.125383,765.477153 264.125383,771 L264.125383,861 L264.125383,861 C264.125383,866.522847 259.64823,871 254.125383,871 L71,871 L71,871 C65.4771525,871 61,866.522847 61,861 C61,859.450721 61.3599757,857.922632 62.0515327,856.536265 L106.945944,766.536265 L106.945944,766.536265 C108.638192,763.143808 112.103308,761 115.894411,761 Z" id="path-all7"></path>
        <path d="M367.753409,260 L627.741331,260 L627.741331,260 C631.545259,260 635.019779,262.158185 636.705627,265.568139 L681.200755,355.568139 L681.200755,355.568139 C683.648404,360.518983 681.619164,366.516647 676.66832,368.964296 C675.290277,369.645587 673.773716,370 672.236459,370 L322.832351,370 L322.832351,370 C317.309504,370 312.832351,365.522847 312.832351,360 C312.832351,358.449921 313.192699,356.921063 313.884943,355.534144 L358.806,265.534144 L358.806,265.534144 C360.498671,262.142853 363.963159,260 367.753409,260 Z" id="path-all8"></path>
        <path d="M505.899829,5.53887519 L569.525792,133.104476 L569.525792,133.104476 C569.529012,133.110932 569.532225,133.117392 569.535432,133.123855 L616.933171,228.670207 L616.933171,228.670207 C619.387499,233.617744 617.366354,239.61814 612.418817,242.072468 C611.037612,242.757643 609.516678,243.11416 607.974863,243.11416 L386,243.11416 L386,243.11416 C380.477153,243.11416 376,238.637008 376,233.11416 C376,231.569044 376.358045,230.044944 377.04604,228.661453 L487.997201,5.54949995 L487.997201,5.54949995 C490.456363,0.604364476 496.458733,-1.4109149 501.403868,1.04824748 C503.350904,2.01648751 504.929279,3.59298963 505.899829,5.53887519 Z" id="path-all9"></path>
        <path d="M738.92213,884 L939.147784,884 L939.147784,884 C942.95277,884 946.428064,886.159372 948.11338,889.570768 L992.575661,979.570768 L992.575661,979.570768 C995.021858,984.52233 992.990858,990.519399 988.039297,992.965596 C986.661942,993.646044 985.146331,994 983.610065,994 L738.92213,994 L738.92213,994 C733.399283,994 728.92213,989.522847 728.92213,984 L728.92213,894 L728.92213,894 C728.92213,888.477153 733.399283,884 738.92213,884 Z" id="path-all10"></path>
        <rect id="path-all11" x="504" y="884" width="210" height="110" rx="10"></rect>
        <rect id="path-all12" x="279" y="884" width="210" height="110" rx="10"></rect>
        <path d="M54.9864821,884 L253.950403,884 L253.950403,884 C259.473251,884 263.950403,888.477153 263.950403,894 L263.950403,984 L263.950403,984 C263.950403,989.522847 259.473251,994 253.950403,994 L10,994 L10,994 C4.4771525,994 1.11910481e-13,989.522847 1.0658141e-13,984 C1.04805054e-13,982.447955 0.361261963,980.917213 1.05519076,979.528939 L46.0416729,889.528939 L46.0416729,889.528939 C47.7353795,886.140508 51.1983287,884 54.9864821,884 Z" id="path-all13"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="all" transform="translate(-4.000000, -12.000000)">
            <polygon id="Triangle" fill="#0C8599" opacity="0" points="757 0 1260 1006 254 1006"></polygon>
            <text id="Cloud" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="48" font-weight="normal" fill="#495057">
                <tspan x="249" y="559">Cloud</tspan>
            </text>
            <text id="Grid" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="48" font-weight="normal" fill="#495057">
                <tspan x="150" y="833">Grid</tspan>
            </text>
            <g id="bigdata" transform="translate(260.000000, 12.000000)">
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all1"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M180.097772,635.5 C176.874774,635.5 173.929014,637.322864 172.490881,640.207217 L127.617042,730.207217 C127.029669,731.385266 126.723934,732.683639 126.723934,734 C126.723934,738.69442 130.529514,742.5 135.223934,742.5 L858.70666,742.5 C860.018316,742.5 861.312178,742.196445 862.486974,741.613096 C866.69157,739.525286 868.407565,734.424282 866.319755,730.219686 L821.629881,640.219686 C820.194243,637.328486 817.244802,635.5 814.016785,635.5 L180.097772,635.5 Z"></path>
                </g>
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all2"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M242.914237,510.5 C239.685157,510.5 236.734935,512.329678 235.299829,515.222329 L190.648904,605.222329 C190.066405,606.396435 189.763312,607.68934 189.763312,609 C189.763312,613.69442 193.568891,617.5 198.263312,617.5 L795.924947,617.5 C797.242804,617.5 798.542609,617.19357 799.72169,616.604916 C803.921769,614.508033 805.626746,609.403336 803.529863,605.203257 L758.597498,515.203257 C757.158576,512.32108 754.213986,510.5 750.992582,510.5 L242.914237,510.5 Z"></path>
                </g>
                <g id="Rectangle-4">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all3"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M305.757992,384.5 C302.523725,384.5 299.569704,386.335499 298.1372,389.235226 L253.675995,479.235226 C253.097638,480.405958 252.796788,481.694201 252.796788,483 C252.796788,487.69442 256.602367,491.5 261.296788,491.5 L733.566777,491.5 C734.878883,491.5 736.173177,491.196237 737.348285,490.612503 C741.552554,488.524034 743.267749,483.422761 741.17928,479.218492 L696.471815,389.218492 C695.035938,386.327947 692.086849,384.5 688.859312,384.5 L305.757992,384.5 Z"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all4"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M739,760.5 C734.30558,760.5 730.5,764.30558 730.5,769 L730.5,859 C730.5,863.69442 734.30558,867.5 739,867.5 L921.151345,867.5 C922.470846,867.5 923.772229,867.192805 924.952444,866.602739 C929.151321,864.50345 930.853373,859.397777 928.754084,855.1989 L883.757278,765.1989 C882.317488,762.319117 879.374188,760.5 876.154539,760.5 L739,760.5 Z"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all5"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="510.5" y="760.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all6"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="760.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all7"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M115.894411,762.5 C112.671974,762.5 109.726625,764.322237 108.288214,767.205825 L63.3938028,857.205825 C62.8059794,858.384237 62.5,859.683113 62.5,861 C62.5,865.69442 66.3055796,869.5 71,869.5 L254.125383,869.5 C258.819803,869.5 262.625383,865.69442 262.625383,861 L262.625383,771 C262.625383,766.30558 258.819803,762.5 254.125383,762.5 L115.894411,762.5 Z"></path>
                </g>
                <g id="Rectangle-3">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all8"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M367.753409,261.5 C364.531697,261.5 361.586881,263.321425 360.148111,266.204022 L315.227054,356.204022 C314.638647,357.382904 314.332351,358.682433 314.332351,360 C314.332351,364.69442 318.137931,368.5 322.832351,368.5 L672.236459,368.5 C673.543127,368.5 674.832205,368.198749 676.003541,367.619652 C680.211758,365.53915 681.936612,360.441135 679.856111,356.232918 L635.360982,266.232918 C633.928011,263.334457 630.97467,261.5 627.741331,261.5 L367.753409,261.5 Z"></path>
                </g>
                <g id="Rectangle-3">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all9"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M504.557529,6.20837501 C503.732561,4.55437229 502.390943,3.21434548 500.735962,2.39134145 C496.532597,0.301053432 491.430583,2.0140409 489.340295,6.21740606 L378.389134,229.329359 C377.804338,230.505327 377.5,231.800811 377.5,233.11416 C377.5,237.808581 381.30558,241.61416 386,241.61416 L607.974863,241.61416 C609.285406,241.61416 610.578199,241.311121 611.752224,240.728722 C615.95763,238.642543 617.675603,233.542206 615.589425,229.3368 L568.191685,133.790448 C568.187595,133.782209 568.187595,133.782209 568.183492,133.773976 L504.557529,6.20837501 Z"></path>
                </g>
                <text id="Infrastructure-as-a" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="315.096" y="700">Infrastructure </tspan>
                    <tspan x="522.456" y="700" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Platform-as-a-Servic" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="352.088" y="575">Platform </tspan>
                    <tspan x="485.464" y="575" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Software-as-a-Servic" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="351.048" y="449">Software </tspan>
                    <tspan x="486.504" y="449" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Connectivity-as-a-Se" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="523.452" y="807">Connectivity</tspan>
                    <tspan x="545.054" y="847" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Energy-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="132.088" y="809">Energy</tspan>
                    <tspan x="94.108" y="849" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Computers-as-a-Servi" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="306.468" y="807">Computers</tspan>
                    <tspan x="316.054" y="847" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Data-as-a-Resource" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="368.648" y="326">Data </tspan>
                    <tspan x="442.056" y="326" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Resource</tspan>
                </text>
                <text id="AI-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="483.516" y="152">AI </tspan>
                    <tspan x="419.276" y="192" font-family="SourceSansPro-Regular, Source Sans Pro" font-weight="normal">as a Service</tspan>
                </text>
                <text id="Storage-as-a-Service" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="757" y="807">Storage</tspan>
                    <tspan x="757" y="847" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Service</tspan>
                </text>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all10"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M738.92213,885.5 C734.22771,885.5 730.42213,889.30558 730.42213,894 L730.42213,984 C730.42213,988.69442 734.22771,992.5 738.92213,992.5 L983.610065,992.5 C984.915891,992.5 986.204161,992.199137 987.374912,991.620756 C991.583739,989.541489 993.310089,984.443981 991.230821,980.235153 L946.76854,890.235153 C945.336022,887.335466 942.382022,885.5 939.147784,885.5 L738.92213,885.5 Z"></path>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all11"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="505.5" y="885.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all12"></use>
                    <rect stroke="#DEE2E6" stroke-width="3" x="280.5" y="885.5" width="207" height="107" rx="10"></rect>
                </g>
                <g id="Rectangle">
                    <use fill="#F1F3F5" fill-rule="evenodd" xlink:href="#path-all13"></use>
                    <path stroke="#DEE2E6" stroke-width="3" d="M54.9864821,885.5 C51.7665517,885.5 48.8230449,887.319432 47.3833943,890.199598 L2.39691214,980.199598 C1.80707267,981.379631 1.5,982.680762 1.5,984 C1.5,988.69442 5.30557963,992.5 10,992.5 L253.950403,992.5 C258.644824,992.5 262.450403,988.69442 262.450403,984 L262.450403,894 C262.450403,889.30558 258.644824,885.5 253.950403,885.5 L54.9864821,885.5 Z"></path>
                </g>
                <text id="Connectivity-as-a-Pr" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="519.452" y="932">Connectivity</tspan>
                    <tspan x="536.63" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
                <text id="Computer-as-a-Produc" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="313.056" y="932">Computer</tspan>
                    <tspan x="311.13" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
                <text id="Storage-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="777" y="932">Storage</tspan>
                    <tspan x="777" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
                <text id="Energy-as-a-Product" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="32" font-weight="bold" fill="#495057">
                    <tspan x="112.088" y="932">Energy</tspan>
                    <tspan x="65.26" y="972" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="28" font-weight="normal">as a Product</tspan>
                </text>
            </g>
            <polyline id="path-all2" stroke="#495057" stroke-width="7" points="518.82161 397.162873 482.669872 397.162873 308.027596 747.790829 346.286515 747.790829"></polyline>
            <text id="Big-Data" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="48" font-weight="normal" fill="#495057">
                <tspan x="384" y="189">Big Data</tspan>
            </text>
            <polyline id="path-all2" stroke="#495057" stroke-width="7" points="707.82161 19.162873 671.669872 19.162873 497.027596 369.790829 535.286515 369.790829"></polyline>
            <polyline id="path-all2" stroke="#495057" stroke-width="7" points="330.784985 775.655558 294.633247 775.655558 241.027596 878.790829 279.286515 878.790829"></polyline>
            <text id="Product" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="48" font-weight="normal" fill="#495057">
                <tspan x="0" y="958">Product</tspan>
            </text>
            <polyline id="path-all2" stroke="#495057" stroke-width="7" points="264.784985 901.655558 228.633247 901.655558 175.027596 1004.79083 213.286515 1004.79083"></polyline>
        </g>
    </g>
</svg>