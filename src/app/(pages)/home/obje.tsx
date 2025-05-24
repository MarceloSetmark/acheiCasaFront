const casas = [
          {
            "id": 1,
            "user_id":1,
            "category_id": "Praia",
            "title": "Apartamento do Sequele",
            "status": "usado",
            "type_of_business": "A",
            "furnished": "yes",
            "country": "Angola",
            "address": "Centralidade do Sequele",
            "city": "Cacuaco",
            "province": "Icolo Bengo",
            "price": 1500000,
            "deleted": false,
            "favorite": 0,
            "created_at": "2025-04-22T15:47:30.000000Z",
            "updated_at": "2025-04-22T15:47:30.000000Z",
            "room": 1,
            "bathroom": 1,
            "useful_sand": null,
            "location": {
                "lat": -8.8383,
                "lng": 13.2344
            },
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit sint cum optio obcaecati mollitia, quidem in, iusto necessitatibus cupiditate sequi ratione eum iure vitae odio delectus autem quasi eligendi!",
            "accommodation_photo":[
              {
                "id":1,
                "property_id":1,
                "photo":"https://i.ibb.co/60tpp9dd/IMG-20220811-103214-771.jpg",
                "deleted": false,
              },
              {
                "id":2,
                "property_id":1,
                "photo":"https://i.ibb.co/MyM43TQb/IMG-20200725-WA0091.jpg",
                "deleted": false,
              }
            ],
              "dimensions": "9m x 10m",
              "type": null,
              "offer": [
                {
                    "id": 1,
                    "property_id": 11,
                    "offer_option_id": 1,
                    "deleted": false
                },
                {
                    "id": 2,
                    "property_id": 11,
                    "offer_option_id": 2,
                    "deleted": false
                }
            ],
            "contact": [
                {
                    "id": 1,
                    "agency_id": null,
                    "property_id": 11,
                    "type": "W",
                    "value": "+244936028718"
                },
                {
                    "id": 2,
                    "agency_id": null,
                    "property_id": 11,
                    "type": "C",
                    "value": "+244956654336"
                },
                {
                    "id": 3,
                    "agency_id": null,
                    "property_id": 11,
                    "type": "M",
                    "value": "geral@achei.ao"
                }
            ]
          },




    /* {
      "id": 2,
      "title": "Condomínio Paraíso Real - Vivenda V6",
      "location": "Benfica, Luanda",
      "price": "Sob consulta",
      "rating": 4.9,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/HTswcydL/IMG-20220907-131349-57.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 3,
      "title": "Condomínio Rosalinda – Apartamento T3",
      "location": "Talatona, Luanda",
      "price": 1500000,
      "rating": 4.7,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/Cp4mP2XF/IMG-20220907-131550-25.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 4,
      "title": "Condomínio Acquaville",
      "location": "Talatona, Luanda",
      "price": 1000000,
      "rating": 4.8,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/MyM43TQb/IMG-20200725-WA0091.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 5,
      "title": "Condomínio Imbondeiro",
      "location": "Talatona, Luanda",
      "price": 1500000,
      "rating": 4.6,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/qYLB90hg/Property-42d59deaa057e70bb379790361418ee2-128596051.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 6,
      "title": "Condomínio Atelier dos Sonhos – Apartamento T3",
      "location": "Talatona, Luanda",
      "price": 2000000,
      "rating": 4.7,
      "date": "Venda",
      "image": "https://i.ibb.co/tw7b9trL/Property-d7d1040d401ead19bd90933daecfd9a4-127873118.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 7,
      "title": "Condomínio Boulevard – Vivenda V4",
      "location": "Talatona, Luanda",
      "price": 2500000,
      "rating": 4.8,
      "date": "Venda",
      "image": "https://i.ibb.co/XxhYkBMC/1.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 8,
      "title": "Urbanização Lar do Patriota – Vivenda V3",
      "location": "Patriota, Luanda",
      "price":3000000,
      "rating": 4.5,
      "date": "Venda",
      "image": "https://i.ibb.co/67gCsP7h/23c7ad5cfbdc44be211bae1bd4d09bb9.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 9,
      "title": "Condomínio Jardins de Talatona",
      "location": "Talatona, Luanda",
      "price": "Sob consulta",
      "rating": 4.9,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/6cvq2w20/0021135-1-1-big-29402-1740x960-c-center.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 10,
      "title": "Condomínio dos Coqueiros",
      "location": "Luanda Sul, Luanda",
      "price":1000000,
      "rating": 4.8,
      "date": "Venda",
      "image": "https://i.ibb.co/bR2pWPtV/348096.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 11,
      "title": "Residencial Torre do Sol",
      "location": "Maianga, Luanda",
      "price": 1000000,
      "rating": 4.7,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/BK7LzkQh/IMG-20200810-144829-870-1597151492957.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 12,
      "title": "Vila Nova – Apartamentos Luxo",
      "location": "Benfica, Luanda",
      "price": 1000000,
      "rating": 4.6,
      "date": "Venda",
      "image": "https://i.ibb.co/ksb9pC8t/IMG-20210211-102844-584-scaled.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 13,
      "title": "Condomínio Palmeiras Residence",
      "location": "Talatona, Luanda",
      "price":1000000,
      "rating": 4.9,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/67z7dhL6/IMG-20210211-112106-701-scaled.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 14,
      "title": "Residência Oceano Azul",
      "location": "Ilha de Luanda, Luanda",
      "price": 1000000,
      "rating": 4.7,
      "date": "venda",
      "image": "https://i.ibb.co/qLcq3rkv/IMG-20210524-165412-341-1.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    },
    {
      "id": 15,
      "title": "Condomínio Verdes Campos",
      "location": "Kilamba, Luanda",
      "price": 1000000,
      "rating": 4.6,
      "date": "Arrendamento",
      "image": "https://i.ibb.co/Mx6GkKZ5/IMG-20220510-113616-464-scaled.jpg",
       "dimensions": "9m x 10m",
       "type":"Residencia"
    } */
  ]

  export default casas;




