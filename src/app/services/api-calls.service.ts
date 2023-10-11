import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  StandardResponse,
  ICategorizedProductsWithAttributesAndVariants,
} from '../utils/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  getProductById(productId:string) {
   return{
    id: '-NePeIs7IU7lj9jDly4S',
    categoryName: 'New Arrivals',
          name: 'Woollen cap',
          description: 'Woollen cap for winter',
          imagePath:
            'https://m.media-amazon.com/images/I/71YN5XFWdVL._AC_UL640_FMwebp_QL65_.jpg',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-NePeJ2U-GlJeOv7U9lv',
          sellingPrice: '9',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [
            {
              key: 'color',
              value: 'black',
              asset: '#000000',
            },
          ],
          variants: [],
   }
  }

  constructor(private http: HttpClient) {}

  getCategorizedProducts(): Observable<
    StandardResponse<ICategorizedProductsWithAttributesAndVariants[]>
  > {
    return of(catP) as Observable<
      StandardResponse<ICategorizedProductsWithAttributesAndVariants[]>
    >;
    // const url = `${BASE_URL}/get-categorized-products-with-attributes-and-variants`;
    // return this.http.get<StandardResponse<ICategorizedProducts[]>>(url).pipe(
    //   catchError((error) => {
    //     console.error('Error fetching categorized products:', error);
    //     return throwError(error);
    //   })
    // );
  }

  getStudentKits(): Observable<
    StandardResponse<ICategorizedProductsWithAttributesAndVariants[]>
  > {
    return of(kits) as Observable<
      StandardResponse<ICategorizedProductsWithAttributesAndVariants[]>
    >;
  }


  getRecommendation(_productId:any): Observable<
  StandardResponse<ICategorizedProductsWithAttributesAndVariants[]>
> {
    return of (rec)as Observable<
    StandardResponse<ICategorizedProductsWithAttributesAndVariants[]>
  >;
  }


}

const rec = {
  status: 'SUCCESS',
  message: 'Categorized products fetched successfully',
  data: [
    {
      categoryId: '-Ne_5wXnjBDXRcx5ysyw',
      categoryName: "Recommendation's for you",
      categoryDescription:
        'Kits that make you feel home the moment you arrive UK.',
      products: [
        {
          id: '-Ne_8Ak_4hqV2PnTBpzk',
          name: 'Premium Kit',
          description: `Ultimate Deluxe Kit.`,
          imagePath:
            'https://www.unikitout.com/cdn/shop/files/MicrosoftTeams-image_21_32598250-834e-4f6c-bdd2-0fc26b3757eb_1836x1836.jpg?v=1694175395',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_8Arwx0kZ6XZLJUsi',
          sellingPrice: '240',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ne_6O7n_O8NXVisSOUn',
          name: 'Bedding Kit - Deluxe (Linen, Duvet & Pillow)',
          description: 'Ultimate bedding kit.',
         
          imagePath:
            'https://www.unikitout.com/cdn/shop/files/COZE_Double_200tc_White_a_37d91818-2e0c-488c-bc9d-45535555a0f2_1836x1836.jpg?v=1691766403',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_6OE1D9R1ZbgS7H9M',
          sellingPrice: '65',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },

        {
          id: '-Ne_6sClKDX9Op5IirIG',
          name: 'Standard Kitchen Kit',
          description: 'Standard Kitchen Kit for your kitchens.',
        
          imagePath:
            'https://cdn.shopify.com/s/files/1/1233/0208/files/UKO_Kitchen-Kit_Gold_Salmon-Back_WEB_4623f84c-ba16-440c-a149-5552ca753a50.jpg?v=1691499187',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_6sHeFjOTARt1k26w',
          sellingPrice: '65',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ne_77ue1suDC4LrNMxe',
          name: 'Bathroom Kit',
          description: 'All you need for your bathroom.',
          imagePath:
            'https://www.unikitout.com/cdn/shop/files/UKO-BATHROOM-Kit-SILVER-PINK-TOWELS_SALMON-BACK_a3fe3d79-a668-4f23-b749-a79dfc692413_1836x1836.jpg?v=1691628441',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_7837RSmvCrQVMpZg',
          sellingPrice: '65',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
  ],
};




const kits = {
  status: 'SUCCESS',
  message: 'Categorized products fetched successfully',
  data: [
    {
      categoryId: '-Ne_5wXnjBDXRcx5ysyw',
      categoryName: 'Student Kits',
      categoryDescription:
        'Kits that make you feel home the moment you arrive UK.',
      products: [
        {
          id: '-Ne_8Ak_4hqV2PnTBpzk',
          name: 'Premium Kit',
          description: `Ultimate Deluxe Kit.
        `,
          productList: [
            '2 x Person Porcelain Dining Set',
            'Superior 12pc Utensil Set',
            'Premium Bedding & Linens',
            'Hand & Bath Towels',
            'Deluxe Premium Pan Set ',
            '2 x Person Porcelain Dining Set(Induction hob friendly)',
            'Superior 12pc Utensil Set',
            'Premium Bedding & Linens',
            'Hand & Bath Towels',
            'Deluxe Premium Pan Set (Induction hob friendly)',
          ],
          imagePath:
            'https://www.unikitout.com/cdn/shop/files/MicrosoftTeams-image_21_32598250-834e-4f6c-bdd2-0fc26b3757eb_1836x1836.jpg?v=1694175395',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_8Arwx0kZ6XZLJUsi',
          sellingPrice: '240',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ne_6O7n_O8NXVisSOUn',
          name: 'Bedding Kit - Deluxe (Linen, Duvet & Pillow)',
          description: 'Ultimate bedding kit.',
          productList: [
            '1x 10.5 Tog Duvet',
            '1x 100% Cotton Duvet Cover',
            '1x Cotton Blend Fitted Sheet',
            '2x Pillows (1x in the Single set)',
            '2x 100% Cotton Pillow Cases (1x in the Single set).',
            'Quilted Mattress Protector',
          ],
          imagePath:
            'https://www.unikitout.com/cdn/shop/files/COZE_Double_200tc_White_a_37d91818-2e0c-488c-bc9d-45535555a0f2_1836x1836.jpg?v=1691766403',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_6OE1D9R1ZbgS7H9M',
          sellingPrice: '65',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },

        {
          id: '-Ne_6sClKDX9Op5IirIG',
          name: 'Standard Kitchen Kit',
          description: 'Standard Kitchen Kit for your kitchens.',
          productList: [
            '3pc Induction Cooking Set',
            '4x Person Stoneware dinner set',
            '12pc Utensils set',
            '3x Knives & Bamboo Wood Chopping Board',
            'Oven Gloves & 2x Tea Towels',
          ],
          imagePath:
            'https://cdn.shopify.com/s/files/1/1233/0208/files/UKO_Kitchen-Kit_Gold_Salmon-Back_WEB_4623f84c-ba16-440c-a149-5552ca753a50.jpg?v=1691499187',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_6sHeFjOTARt1k26w',
          sellingPrice: '65',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ne_77ue1suDC4LrNMxe',
          name: 'Bathroom Kit',
          description: 'All you need for your bathroom.',
          productList: [
            'Wash Kit',
            'Bath Robe',
            '3pc Towel Set (Face cloth, Hand towel, Bath towel)',
          ],
          imagePath:
            'https://www.unikitout.com/cdn/shop/files/UKO-BATHROOM-Kit-SILVER-PINK-TOWELS_SALMON-BACK_a3fe3d79-a668-4f23-b749-a79dfc692413_1836x1836.jpg?v=1691628441',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-Ne_7837RSmvCrQVMpZg',
          sellingPrice: '65',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
  ],
};

const catP = {
  status: 'SUCCESS',
  message: 'Categorized products fetched successfully',
  data: [
    {
      categoryId: '-NePIWSPV0mz0QxXYOrW',
      categoryName: 'New Arrivals',
      categoryDescription: 'Best in class new winter clothes',
      products: [
        {
          id: '-NePNTDjKHLlxYZK2fnU',
          name: '\t Off-Shoulder One-Neck Knitted Sweater White / One Size by CJ',
          description: 'Sweater to keep you warm and stylish.',
          imagePath:
            'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqotKrT7rd2Axxi9mcr_17EAtsalQZG5O_LbLZrnIiLBPMOFt5EVTft0svhxK1BscMy9Q_nQJF0OzVWtK34jqN2v_0AA2K5Y-o2GDh0THJ&usqp=CAE',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-NePNTOXHv8MM4_dESLV',
          sellingPrice: '18',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [
            {
              key: 'color',
              value: 'red',
              asset: '#C1423F',
            },
            {
              key: 'size',
              value: 'large',
              asset: 'L',
            },
          ],
          variants: [
            {
              unitsInStock: 100,
              unit: 'unit',
              productId: '-NePNTDjKHLlxYZK2fnU',
              imagePath:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqotKrT7rd2Axxi9mcr_17EAtsalQZG5O_LbLZrnIiLBPMOFt5EVTft0svhxK1BscMy9Q_nQJF0OzVWtK34jqN2v_0AA2K5Y-o2GDh0THJ&usqp=CAE',
              name: '\t Off-Shoulder One-Neck Knitted Sweater White / One Size by CJ',
              description: 'Sweater to keep you warm and stylish.',
              id: '-NeZoKuf5X9m-EyvtJsS',
              categoryId: '-NePIWSPV0mz0QxXYOrW',
              status: 'ACTIVE',
              pricingId: '-NePNTOXHv8MM4_dESLV',
              sellingPrice: '18',
              discount: '10',
              discountUnit: 'percentage',
              attributes: [
                {
                  key: 'color',
                  value: 'green',
                  asset: '#DAF7A6',
                },
                {
                  key: 'size',
                  value: 'medium',
                  asset: 'M',
                },
              ],
            },
            {
              unitsInStock: 100,
              unit: 'unit',
              productId: '-NePNTDjKHLlxYZK2fnU',
              imagePath:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqotKrT7rd2Axxi9mcr_17EAtsalQZG5O_LbLZrnIiLBPMOFt5EVTft0svhxK1BscMy9Q_nQJF0OzVWtK34jqN2v_0AA2K5Y-o2GDh0THJ&usqp=CAE',
              name: '\t Off-Shoulder One-Neck Knitted Sweater White / One Size by CJ',
              description: 'Sweater to keep you warm and stylish.',
              id: '-NeZoYH_R2MozCd32q3G',
              categoryId: '-NePIWSPV0mz0QxXYOrW',
              status: 'ACTIVE',
              pricingId: '-NePNTOXHv8MM4_dESLV',
              sellingPrice: '18',
              discount: '10',
              discountUnit: 'percentage',
              attributes: [
                {
                  key: 'color',
                  value: 'pink',
                  asset: '#C53199',
                },
                {
                  key: 'size',
                  value: 'small',
                  asset: 'S',
                },
              ],
            },
          ],
        },
        {
          id: '-NePeIs7IU7lj9jDly4S',
          name: 'Woollen cap',
          description: 'Woollen cap for winter',
          imagePath:
            'https://m.media-amazon.com/images/I/71YN5XFWdVL._AC_UL640_FMwebp_QL65_.jpg',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-NePeJ2U-GlJeOv7U9lv',
          sellingPrice: '9',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [
            {
              key: 'color',
              value: 'black',
              asset: '#000000',
            },
          ],
          variants: [],
        },
        {
          id: '-NePeslXtkkc7ER57Oiy',
          name: 'Leather Jacket',
          description:
            'Keep your torso warm and cozy with this soft mandhana. Perfect for a comfortable day.',
          imagePath:
            'https://5.imimg.com/data5/SR/RC/LL/SELLER-21288657/casanova-vintage-genuine-leather-men-jacket-x-500x500.jpg',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-NePesvZY27Mr4rcX1bv',
          sellingPrice: '23',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [
            {
              key: 'color',
              value: 'brown',
              asset: '#5C4033',
            },
          ],
          variants: [
            {
              unitsInStock: 100,
              unit: 'unit',
              productId: '-NePeslXtkkc7ER57Oiy',
              imagePath:
                'https://5.imimg.com/data5/SR/RC/LL/SELLER-21288657/casanova-vintage-genuine-leather-men-jacket-x-500x500.jpg',
              name: 'Leather Jacket',
              description:
                'Keep your torso warm and cozy with this soft mandhana. Perfect for a comfortable day.',
              id: '-NePhHvxS_fEQahiIQOk',
              categoryId: '-NePIWSPV0mz0QxXYOrW',
              status: 'ACTIVE',
              pricingId: '-NePesvZY27Mr4rcX1bv',
              sellingPrice: '23',
              discount: '10',
              discountUnit: 'percentage',
              attributes: [
                {
                  key: 'color',
                  value: 'black',
                  asset: '#000000',
                },
              ],
            },
          ],
        },
        {
          id: '-NePfhYFgpHseGdF8vEP',
          name: "DIAZ Men's Cotton Crew Neck Sweatshirt/Sweater",
          description: 'Best Tshirt for the cold weather',
          imagePath:
            'https://m.media-amazon.com/images/I/61sFyENZJ6L._UX679_.jpg',
          unit: 'unit',
          unitsInStock: 100,
          pricingId: '-NePfhfjmwwH6IZlALDI',
          sellingPrice: '12',
          discount: '10',
          discountUnit: 'percentage',
          attributes: [
            {
              key: 'color',
              value: 'brown',
              asset: '#111111',
            },
          ],
          variants: [],
        },
      ],
    },

    {
      categoryId: 'pB0ZywgBJCBF7ralBcHT',
      categoryName: 'Bedroom essentials',
      categoryDescription:
        'Create your personal sanctuary of comfort with our collection of exquisite bedroom essentials. From intricately designed bedspreads to soft and luxurious pillows, our range will envelop you in a world of tranquility and style. Embrace a rich assortment of craftsmanship as you explore our handpicked selection, allowing your bedroom to reflect timeless beauty.',
      products: [
        {
          id: '-Nch8XaqZ4x9KOHGv6R_',
          name: '10.5 Tog Super Soft Double Duvet',
          description:
            "Experience the ultimate in comfort and warmth with our 10.5 Tog Super Soft Double Duvet. Expertly crafted to provide a luxurious night's sleep, this duvet is perfect for year-round use, ensuring you stay cozy during chilly nights and comfortably cool during warmer months.",
          imagePath:
            'https://cdn.media.amplience.net/i/primark/999244915002_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-Nch8YBySgaH0ffWUCNT',
          sellingPrice: '14',
          discount: '9',
          discountUnit: 'rupees',
          attributes: [],
          variants: [],
        },
        {
          id: '-Nch9JQpakundZjRtAWl',
          name: '13.5 Tog Super Soft King Duvet',
          description:
            'Dive into a realm of unparalleled comfort with our 13.5 Tog Super Soft King Duvet. Designed for those who seek warmth and luxury, this duvet promises to transform your nights into a cocoon of coziness, especially during the colder months.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/999244746002_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-Nch9Jb4C5USmtGwnKfI',
          sellingPrice: '22',
          discount: '12',
          discountUnit: 'rupees',
          attributes: [],
          variants: [],
        },
        {
          id: '-NchABkdx8fvCxR7Zsf3',
          name: '10.5 Tog Non-Allergenic Hollowfibre Single Duvet',
          description:
            'Discover the perfect blend of comfort and health with our 10.5 Tog Non-Allergenic Hollowfibre Single Duvet. Specially designed for sensitive sleepers, this duvet ensures a restful night without the worry of allergens.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/999244917002_01?w=2048&fmt=autoa',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NchABx4WddB1bsfk-yU',
          sellingPrice: '11',
          discount: '14',
          discountUnit: 'rupees',
          attributes: [],
          variants: [],
        },
        {
          id: '-NchBe9pSFSSsLoYo3Dd',
          name: 'Floral Pattern Single Duvet Cover Set',
          description:
            'Embrace the timeless beauty of nature with our Floral Pattern Single Duvet Cover Set. Elegantly designed with intricate blossoms and leaves, this set adds a touch of garden-inspired charm to your bedroom.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991083150306_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NchBeqOHB9K0VbmLp-O',
          sellingPrice: '15',
          discount: '10',
          discountUnit: 'rupees',
          attributes: [],
          variants: [],
        },
        {
          id: '-NchCJwCgpODEN3R3hiX',
          name: 'Paisley Print Double Duvet Cover Set',
          description:
            'Step into a world of elegance and sophistication with our Paisley Print Double Duvet Cover Set. Infused with the timeless allure of paisley patterns, this set is a perfect blend of tradition and contemporary style.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991073471306_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NchCK7jXIUvxnfTn42-',
          sellingPrice: '20',
          discount: '10',
          discountUnit: '',
          attributes: [],
          variants: [],
        },
        {
          id: '-NchD8aTMjn7pdW0QvI8',
          name: 'Pink Paisley King Duvet Cover Set',
          description:
            'Immerse yourself in the luxurious embrace of our Pink Paisley King Duvet Cover Set. With its vibrant pink hue adorned with the timeless paisley pattern, this set is a harmonious blend of modern vibrancy and classic elegance.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991073486306_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NchD97ry2aUN2gF3Zbk',
          sellingPrice: '19',
          discount: '16',
          discountUnit: 'rupees',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ncm6NrUDw0C5SqfmJ3W',
          name: '2pk Anti-Allergy Pillows',
          description:
            'Experience a night of restful sleep without the worry of allergens with our 2pk Anti-Allergy Pillows. Specially designed to combat common allergens, these pillows are a haven for those seeking both comfort and health.This set includes two pillows, perfect for outfitting your bed or keeping an extra on hand for guests.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/999244910002_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 1,
          pricingId: '-Ncm6PRza5VUJ9dTS4F5',
          sellingPrice: '10',
          discount: '4',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ncm7R5gGhbL7eRnd8EG',
          name: 'Cotton Rich Double Fitted Sheet',
          description:
            'ndulge in the simple luxury of our Cotton Rich Double Fitted Sheet. Woven with a blend of premium cotton and durable fibers, this sheet offers an exquisite softness while ensuring longevity, making it a staple for any bedroom.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991021614707_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-Ncm7Rd4lqoOikwHvp2F',
          sellingPrice: '9',
          discount: '3',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ncm8GCOZApj3qHtei_b',
          name: 'Cotton Rich Single Fitted Sheet',
          description:
            'Experience the unmatched comfort of our Cotton Rich Single Fitted Sheet. Expertly crafted with a blend of premium cotton and resilient fibers, this sheet promises both the gentle touch of cotton and the lasting durability of modern materials.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991021149002_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-Ncm8GpdIDAyyAYATvFv',
          sellingPrice: '7',
          discount: '3',
          discountUnit: 'rupees',
          attributes: [],
          variants: [],
        },
        {
          id: '-Ncm9ivW4T_Fv4d2_Nqa',
          name: 'Super King Fitted Sheet',
          description:
            'xperience the unmatched comfort of our Cotton Rich Single Fitted Sheet. Expertly crafted with a blend of premium cotton and resilient fibers, this sheet promises both the gentle touch of cotton and the lasting durability of modern materials.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991021775002_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-Ncm9jUNU_Snavt8_OCN',
          sellingPrice: '11',
          discount: '4',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-NcmAPNjZKtqs6EzWDMy',
          name: '2pk Cotton Rich Pillowcases',
          description:
            'Elevate your sleep experience with our 2pk Cotton Rich Pillowcases. Meticulously crafted from a blend of premium cotton and durable fibers, these pillowcases offer the soft embrace of cotton combined with lasting resilience, ensuring both comfort and longevity.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991021078707_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmAPcTV1n7_zc8_78W',
          sellingPrice: '4',
          discount: '2',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
    {
      categoryId: '-NcmJy2eHFPikd7qla83',
      categoryName: 'Food Essentials',
      categoryDescription:
        'Embarking on a new academic journey in the UK? Our curated collection of Food Essentials ensures that students from around the globe feel right at home. From familiar flavors to must-try British staples, this range is designed to cater to the diverse palates of international students.',
      products: [
        {
          id: '-NcmKP8D1egM8G2wlAFc',
          name: 'Pot Noodle Bombay Bad Boy 90g x12',
          description:
            "Spice up your quick meal game with our pack of 12 Pot Noodle Bombay Bad Boy. Infused with the fiery flavors of the East, this instant noodle pot offers a tantalizing taste adventure that's both convenient and delicious.",
          imagePath:
            'https://firebasestorage.googleapis.com/v0/b/kickstarters-5a5d4.appspot.com/o/noodles.png.jpeg?alt=media&token=6d2cc651-8f1f-4349-82cd-2e434e9311ee',
          unit: 'packet',
          unitsInStock: 5,
          pricingId: '-NcmKPK-5mkrQfNmiJ6_',
          sellingPrice: '16',
          discount: '8',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-NcmLUDLofenOMulkErm',
          name: 'Oat Burst Instant Porridge Snack Original Oats 57g x8 packets',
          description:
            'Embrace the wholesome goodness of oats with our Oat Burst Instant Porridge Snack in Original Oats flavor. Packed in convenient portions, this porridge offers a heartwarming and nutritious start to your day, no matter how busy your morning might be.',
          imagePath:
            'https://firebasestorage.googleapis.com/v0/b/kickstarters-5a5d4.appspot.com/o/oats.png.jpeg?alt=media&token=484b59f6-32a1-433c-bc40-89e08ecb1dc6',
          unit: 'packet',
          unitsInStock: 5,
          pricingId: '-NcmLUkgVBJ4n2HxuNET',
          sellingPrice: '6',
          discount: '8',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-NcmMXTMpHOo7zbLjbzM',
          name: 'Basmati Rice Microwavable Packet 250g x12',
          description:
            'Discover the unparalleled convenience and authentic taste with our ce Basmati Rice Microwavable Packets. Each box contains 12 individual packets, ensuring you have a ready-to-go, aromatic serving of Basmati rice at your fingertips.',
          imagePath:
            'https://firebasestorage.googleapis.com/v0/b/kickstarters-5a5d4.appspot.com/o/basmati-rice.png.jpeg?alt=media&token=08658df0-9a9c-44fc-80d8-f2d6fd691bcf',
          unit: 'packet',
          unitsInStock: 5,
          pricingId: '-NcmMY8Fm7Bbcx8T_bZq',
          sellingPrice: '11',
          discount: '3',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
    {
      categoryId: 'uXV6AvPdUJVgV13ZBZLY',
      categoryName: 'Laundry Essentials',
      categoryDescription:
        'Elevate your laundry routine with our range of thoughtfully selected laundry essentials. Discover the artistry of handwoven baskets and intricately crafted clothespins that add an aesthetic touch to your laundry space. Let textures and designs bring vibrancy to your everyday chores, turning them into moments of delight.',
      products: [
        {
          id: '-NcmCO_RibBCT2XHy72P',
          name: 'Quilted Laundry Bag',
          description:
            'Elevate your laundry routine with our Quilted Laundry Bag. Merging style with practicality, this bag offers a chic solution for storing and transporting your laundry with ease.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/999201018306_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmCP6pKhT78QUr_LZ0',
          sellingPrice: '7',
          discount: '3',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-NcmNRXgs_sZuP88KfbJ',
          name: 'Non Bio Liquid Capsules',
          description:
            'Introducing our Non-Bio Laundry Pods, infused with the delicate essence of Iconic Flowers. Designed for those with sensitive skin and a love for floral freshness, these pods promise a thorough clean while leaving your clothes with a lingering floral aroma.',
          imagePath:
            'https://firebasestorage.googleapis.com/v0/b/kickstarters-5a5d4.appspot.com/o/det-capsules.png.jpeg?alt=media&token=20eaf506-fd65-4083-9c1e-912db2a72074',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmNS2Um5wBt35GF7ui',
          sellingPrice: '5',
          discount: '2',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
    {
      categoryId: 'x8EOkKSuyma3E0TqkQSW',
      categoryName: 'Fashion',
      categoryDescription:
        'Indulge in the world of fashion with our curated selection of apparel and accessories. From timeless elegance to contemporary styles, our fashion collection embodies a symphony of colors, fabrics, and trends. Explore diverse attires that cater to every taste, allowing you to express your individuality through your personal style.',
      products: [
        {
          id: '-NcmEMSf5AlZucbgAtFZ',
          name: 'Faux Fur Slippers',
          description:
            'Step into a world of unparalleled comfort with our Faux Fur Slippers. Designed with plush faux fur and a commitment to coziness, these slippers are the epitome of luxury for your feet.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991037843528_02?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmEN0ZZY9pJWoiqoAx',
          sellingPrice: '8',
          discount: '2',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-NcmF0fBbGZK35I7k1jW',
          name: 'Checked Slipper Socks',
          description:
            'Introducing our Checked Slipper Socks, where the coziness of slippers meets the snug fit of socks. Adorned with a classic checked pattern, these slipper socks are the perfect blend of style, warmth, and comfort.Crafted with premium materials, these slipper socks envelop your feet in warmth, ensuring comfort on even the chilliest days.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991041987505_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmF1B2so4s36paswb-',
          sellingPrice: '6',
          discount: '3',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
    {
      categoryId: '-NcmH6GJuuOkLIlXHT8s',
      categoryName: 'Bathroom Essentials',
      categoryDescription:
        'Transform your bathroom into a sanctuary of comfort and functionality with our curated Bathroom Essentials Collection. From daily necessities to luxurious additions, this collection ensures every moment in your bathroom is both practical and pampering.',
      products: [
        {
          id: '-NcmHS0KT4EdAidl0WuV',
          name: 'Bath Towel',
          description:
            "Drape yourself in the opulence of our Blue Luxury Bath Towel. Crafted with meticulous care, this towel not only offers exceptional absorbency but also elevates your bathroom's aesthetic with its rich blue hue.",
          imagePath:
            'https://firebasestorage.googleapis.com/v0/b/kickstarters-5a5d4.appspot.com/o/bath-towel.png.jpeg?alt=media&token=9b2489bd-148a-4607-b5f3-3ba44ee8bc98',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmHSCtSt9zXg6NVsvr',
          sellingPrice: '11',
          discount: '3',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
        {
          id: '-NcmIf0UUrfdaFuiOJD4',
          name: 'Home Collections 100% Cotton Terry Bath Mat',
          description:
            'Step onto the plush comfort of our Home Collections 100% Cotton Terry Bath Mat. Expertly crafted to provide a soft landing for your feet, this bath mat combines the best of luxury and functionality for your bathroom.',
          imagePath:
            'https://firebasestorage.googleapis.com/v0/b/kickstarters-5a5d4.appspot.com/o/bath-mat.png.jpeg?alt=media&token=133043c6-9159-4309-b0d9-2115d999084e',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmIfeHS0KqPJsusdIB',
          sellingPrice: '7',
          discount: '3',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
    {
      categoryId: '3XqbFjbiY2xl0f9Dsijb',
      categoryName: 'Electronics',
      categoryDescription:
        "Experience the future with our curated range of cutting-edge electronics. Whether you're in search of the latest smartphones that seamlessly integrate technology, or innovative gadgets that simplify your life, our collection offers you a glimpse into the forefront of innovation. Explore the fusion of modern technology and convenience in every device.",
      products: [],
    },
    {
      categoryId: 'JoPQ3AF7DVojkJBGweV9',
      categoryName: 'Kitchen Essentials',
      categoryDescription:
        'Enhance your culinary skills with our array of kitchen essentials, designed to make your cooking journey delightful and efficient. From classic utensils that stand the test of time to modern cookware that caters to contemporary needs, our collection celebrates the art of cooking. Discover a world of flavors and cultures through carefully chosen kitchen tools.',
      products: [
        {
          id: '-NcmAz4ETUcP0oQnNWkX',
          name: '2pk Printed Lunchboxes',
          description:
            'Add a touch of style to your lunchtime routine with our 2pk Printed Lunchboxes. Designed with vibrant prints and crafted for functionality, these lunchboxes are perfect for school, work, or any on-the-go meal.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991067396980_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmAzGmI1EObftPhKTp',
          sellingPrice: '6',
          discount: '2',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
    {
      categoryId: 'afhQQvcmarAem9K1FYya',
      categoryName: 'Stationery',
      categoryDescription:
        'Elevate your writing experience with our assortment of stationery that blends functionality with artistic expression. From handcrafted journals with intricate details to sustainable writing instruments, our stationery collection encourages you to embark on a journey of creativity. Put your thoughts to paper with tools that inspire your imagination.',
      products: [
        {
          id: '-NcmGpz-S7rCqGTDOMTx',
          name: 'Ombré 10000mAh Power Bank',
          description:
            'Stay charged in style with our Ombré 10000mAh Power Bank. Marrying high-capacity performance with a stunning ombré design, this power bank is both a tech essential and a fashion statement.',
          imagePath:
            'https://cdn.media.amplience.net/i/primark/991060546935_01?w=2048&fmt=auto',
          unit: 'unit',
          unitsInStock: 5,
          pricingId: '-NcmGqjMa5jrvuYZoPEf',
          sellingPrice: '16',
          discount: '4',
          discountUnit: 'percentage',
          attributes: [],
          variants: [],
        },
      ],
    },
  ],
};
