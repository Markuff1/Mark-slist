import React from "react";
import "./ListOfItems.css";

export function ListOfItems(){
        return (
        <table id = "myTable">
            <tr>
                <th>Item</th>
                <th>Link</th>
                <th>Price</th>
            </tr>
            <tr className="hover3">
                <td>New Desk Chair (Standing one with footrest)</td>
                <td><a href="https://www.amazon.co.uk/s?k=standing+desk+chair+with+footrest&ref=nb_sb_noss" target="_blank">Amazon</a></td>
                <td>£50 - £110</td>
            </tr>
            <tr className="hover3">
                <td>Oban & Bella Personalised Calendar (A5)</td>
                <td><a href="https://www.snapfish.co.uk/photo-calendars/a3-classic-calendar?icid=Photo-Calendars|Choose-your-photo-calendar-type-and-size|1B2|link|12x16.5-Classic-Calendar|200102|#/dgview?productCategory=Calendars" target="_blank">Snapfish</a></td>
                <td>£20.99</td>
            </tr>
            <tr className="hover3">
                <td>A Black wooden flip clock</td>
                <td><a href="https://www.amazon.co.uk/Luqixcey-Automatic-Internal-Mechanical-Creative/dp/B0DB4W675B/ref=sr_1_9?crid=39KRBMSJA2O9R&dib=eyJ2IjoiMSJ9.pAlQC5E7eRNpY0qx0M870XrN9PD-DOj-00czc7YyfqZYAn49AC7EAKorcexOIo9Zq9yURM5lxl0tddngX4WUUo_EONi6fr-Sdz-WinxG6E5KI-kTmymsFrxvaah8kylhLQS7GSgBdmzuVuWPRY-ApwjxniImo2SokbY60ggceqi2ZvdcfiPM8sonJsirl5hx_7IvwySqE40t5OfdnK0iWJ4aR9bQh_b6XWEDYkflZP1Gle2HQwDqjk3O9hsxQxps7qPLeuo2AR99BF9mj6Z2zQxD-j5dcsp4Lx7kYD4Xtgc.0L3Yso0N39iuDpo3eH7h1hTLmd5GWY5op9S1oOdaN1w&dib_tag=se&keywords=Flip+clock&qid=1729862617&sprefix=flip+clock%2Caps%2C122&sr=8-9" target="_blank">Amazon</a></td>
                <td>~£50</td>
            </tr>
            <tr className="hover3">
                <td>Crocs - Any colour or type</td>
                <td><a href="https://www.amazon.co.uk/dp/B01A6LUD4A/ref=twister_B0DJ9H5R4Z?_encoding=UTF8&psc=1" target="_blank">Amazon</a></td>
                <td>£20 - £34</td>
            </tr>
            <tr className="hover3">
                <td>Botanical Gardens Lego set</td>
                <td><a href="https://www.lego.com/en-gb/product/the-botanical-garden-21353" target="_blank">Lego</a></td>
                <td>£289.99</td>
            </tr>
            <tr className="hover3">
                <td>Retro Radio Lego set</td>
                <td><a href="https://www.lego.com/en-gb/product/retro-radio-10334" target="_blank">Lego</a></td>
                <td>£89.99</td>
            </tr>
            <tr className="hover3">
                <td>The Globe Lego set</td>
                <td><a href="https://www.lego.com/en-gb/product/the-globe-21332" target="_blank">Lego</a></td>
                <td>£199.99</td>
            </tr>
            <tr className="hover3">
                <td>PACMAN Arcade Lego set</td>
                <td><a href="https://www.lego.com/en-gb/product/pac-man-arcade-10323" target="_blank">Lego</a></td>
                <td>£229.99</td>
            </tr>
            <tr className="hover3">
                <td>Art Lego sets</td>
                <td><a href="https://www.lego.com/en-gb/themes/art" target="_blank">Lego</a></td>
                <td>£80 - £170</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Big Toblerone</td>
                <td><a href="" target="_blank">Multiple Shops</a></td>
                <td>£3 - £5</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Big Gingerbread Man</td>
                <td><a href="" target="_blank">John Lewis</a></td>
                <td>£9.50</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Big Strawberry Dream</td>
                <td><a href="" target="_blank">Multiple Shops</a></td>
                <td>£5- £10</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Shortbreads</td>
                <td><a href="" target="_blank">Multiple Shops</a></td>
                <td>£2 - £10</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Costa Glasses</td>
                <td><a href="https://www.tesco.com/groceries/en-GB/products/316437553" target="_blank">Tesco/Costa</a></td>
                <td>£15</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Stress Ball</td>
                <td><a href="" target="_blank">Multiple Shops</a></td>
                <td>£1 - £5</td>
            </tr>
            <tr className="hover3NEW">
                <td className="Item">Kimm & Miller Festive Cake in a Mug (Gingerbread mug)</td>
                <td><a href="https://www.tesco.com/groceries/en-GB/products/316923784" target="_blank">Tesco</a></td>
                <td>£6</td>
            </tr>
            <tr className="hover3">
                <td>ROBOTIME Wood Building sets</td>
                <td><a href="https://www.amazon.co.uk/stores/Robotime/page/BCF28182-4ECB-41E4-BBA5-A9C32BA326CE?ref_=ast_bln" target="_blank">Amazon</a></td>
                <td>£10 - £100</td>
            </tr>
            <tr className="hover3">
                <td>Philips hue gradient strip lights</td>
                <td><a href="https://www.amazon.co.uk/Philips-Gradient-Entertainment-Bluetooth-Assistant/dp/B09C3RSZ7Q/ref=sr_1_5?crid=4YC07XAKLUWI&dib=eyJ2IjoiMSJ9.u8Ga7JLoOfI95OOonb0RFPXmnX1eNPk9XG4jjm7N5C4703LCK8f1DhOa-0hBW8QxafSnZJ65vdMrfnIuUa2ObVG_H16dB-nTZDPARPmpwOTc-4qfmg_LFeMi9ZxWOj44d8lFlp5ezgWgU7yqzSSgrt6sZ64owuQP2qhDJB9D9Ejknco2SKnc957jfOZZQIWUwyvzTKITlH3ev8LXwss21fs1PyRXkPr3PcFBCduOW5VAwPda0AUlenJ27_tdeqb0Awjk7E39HZnMhgsLPW5IYRU6eue0p7MZJNEgWqxLqOQ.TYWgxulEXezBh8Lorj6gUEH4MqchZRwZfjWGXYKBKFY&dib_tag=se&keywords=philips+hue+gradient+light+strip&nsdOptOutParam=true&qid=1729867272&sprefix=philips+hue+GRA%2Caps%2C122&sr=8-5" target="_blank">Amazon</a></td>
                <td>£109.39</td>
            </tr>
            <tr className="hover3">
                <td>Clothes from Abercrombie and fitch</td>
                <td><a href="https://www.abercrombie.com/shop/uk/" target="_blank">Abercrombie and fitch</a></td>
                <td>£50</td>
            </tr>
            <tr className="hover3">
                <td>New Hoodies and zip-up jackets</td>
                <td><a href="" target="_blank">AnyWhere</a></td>
                <td>£??</td>
            </tr>
            <tr className="hover3">
                <td>Jaffa Cake Tubes</td>
                <td><a href="https://home.bargains/product/l24040/mcvities-jaffa-christmas-cracker-488g" target="_blank">B&M</a></td>
                <td>£??</td>
            </tr>
            <tr className="hover3">
                <td>New Throw with Oban & Bella on it</td>
                <td><a href="https://www.snapfish.co.uk/photo-blankets#/pdpview?sku=CommerceProduct_285099&app=blankets&productCategory=Gift" target="_blank">Snapfish</a></td>
                <td>£36.99</td>
            </tr>
            <tr className="hover3">
                <td>Bigger Stanley Cup - either blue spruce or shale</td>
                <td><a href="https://www.amazon.co.uk/Stanley-Quencher-H2-0-FlowState-Tumbler/dp/B0DFWX1YG3/ref=sr_1_5?crid=3R88EBFJLCJZ3&dib=eyJ2IjoiMSJ9.xMGjA_AD2YbZHG9hS1uynz-7b-cVCHqYIEsx_Y_DBlTX7X4C8HYFW4lX9Fd_3ePlxaWuFOTlHgQkZCJIgHozW1O8Z4rSx9jqQvZ6HeA4yzZimDntqzGXZrpbmm-9jZc39XWTmCH_xHNd4XqvZia-Tuv9K7o9TrUq4orE3maS4obTq6X4vlZ0h6OL3mUsZlUm36sK6LverrTRGSr0Bzx56ACUpZw_lg6Fz9Odck9S-f_oa1E1iAK3KRrClX8VAT619wHc7QaBfgCs2CPY5Vvk6cf_1VDbvmweHHoga78SIfs.Z5hAGPxpHGhxDVPW1HsaDLHtrrgvpgnlFj6aDHVn1mo&dib_tag=se&keywords=1l%2Bstanley%2Bcup&nsdOptOutParam=true&qid=1729867535&sprefix=1L%2BStanl%2Caps%2C138&sr=8-5&th=1" target="_blank">Amazon</a></td>
                <td>£45</td>
            </tr>
            <tr className="hover3">
                <td>New wrist strap for my apple watch series 9 45mm</td>
                <td><a href="https://www.amazon.co.uk/gp/product/B091FKGZ73/ref=ox_sc_saved_image_1?smid=AA2T1P34YUMGO&th=1&psc=1" target="_blank">Amazon</a></td>
                <td>£5 - £10</td>
            </tr>
            <tr className="hover3">
                <td>Jimmy choo Ice Aftershave</td>
                <td><a href="https://www.amazon.co.uk/Jimmy-Choo-Man-Toilette-100ml/dp/B06XWD6G2N/ref=sr_1_1_pp?crid=1NAEU3H0913SP&dib=eyJ2IjoiMSJ9.P29qRUm00keVk2sv0FoTnaBmItbFBH92LrhdTqMYNTAnEe5XalztypE1_ySStIXsAxjTajLamBn4836pR4c3YmXm5GTkKDnsAcFm9Iunbvj6UKA4nH8BZYTUyjl1AytYcLdsLFhUrnQ4yHt3je-yiQ5liCqw3krvTjwt5G7juY2fwj9eBGDPeXKNNiDBf-b6SSX_QNAQ6v2Gtk4G6gk9IY9fj0k045aqguDGDEWYBVWAI7CR5ZmHiZOeIOIBZie0JdnEpTxiWGbrUbmiXGC2oCyPfetfVMtSvFfBdf7ZLI8.u1hIaX4EGi5veBqSibHu5LLpxTX0NwyJaqANBKT1kRM&dib_tag=se&keywords=Jimmy+choo+Ice&nsdOptOutParam=true&qid=1729867638&sprefix=jimmy+choo+ice%2Caps%2C110&sr=8-1" target="_blank">Amazon</a></td>
                <td>£50</td>
            </tr>
            <tr className="hover3">
                <td>BVLGARI Wood Aftershave</td>
                <td><a href="https://www.amazon.co.uk/Bvlgari-Man-Wood-Essence-Parfum/dp/B07FQCBT3V/ref=sr_1_5?crid=2WODA7288DZYB&dib=eyJ2IjoiMSJ9.3prQKuf2Mc35DAUuC40IGyXnZMtHAd1duirPuTX3HTJHVq4E5nLfk5Gb8qTsDdmPoWz0yQUZ7NI4XfjVufku5zBq6EqOyuVmBTIVh616lWdu6PIkY5wqRuKIQDEYHvYonsxF_bEKRrdoH0XqYrQwZOFv3iSqQ0_QMqr2g14u4JVIsQT1iuxgyzv4V2Wk1Pral7E9RdYtbVrVNsuNwH9rW9K8iILSboH91XrkFE0ac8tMi-AzCpQzeyXY2V3-M2f-by4vhL0cGuLLGrIYUmMnsCZZ2N7XW4pOr1r-Fq_KOJA.o7C6O7EtfZU3q02mWrSF80WJG425qRXOebj9ojlweCU&dib_tag=se&keywords=bvlgari+wood+aftershave+men&nsdOptOutParam=true&qid=1729867718&sprefix=BVLGARI+Wood+aft%2Caps%2C112&sr=8-5" target="_blank">Amazon</a></td>
                <td>£68.45</td>
            </tr>
            <tr className="hover3">
                <td>New Black backpack</td>
                <td><a href="" target="_blank">Amazon</a></td>
                <td>£15 - £20</td>
            </tr>
            <tr className="hover3">
                <td>New Candles</td>
                <td><a href="" target="_blank">Next</a></td>
                <td>£??</td>
            </tr>
            <tr className="hover3">
                <td>Suprises</td>
                <td><a href="" target="_blank">??</a></td>
                <td>£??</td>
            </tr>
            <tr className="hover3">
                <td>Tickets to a WWE PPV In america</td>
                <td><a href="" target="_blank">Ticketmaster</a></td>
                <td>£1000</td>
            </tr>
            <tr className="hover3">
                <td>Hamper</td>
                <td><a href="" target="_blank">Multiple Shops</a></td>
                <td>£??</td>
            </tr>
        </table>
        )
    }