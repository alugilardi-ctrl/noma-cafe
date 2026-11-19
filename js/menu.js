var M=[['Cafés',['Espresso|2.700','Doble espresso|2.900','Americano|2.800','Macchiato|2.900','Cortado|2.900','Capuchino|3.200','Latte|3.400','Flat white|3.500','Mocha|3.800','Chai latte|3.700']],
['Pastelería artesanal',['Medialuna clásica|2.200','Croissant relleno|3.500','Muffin|2.800','Roll de canela|3.400','Alfajor de maicena|2.000','Cookie de chocolate|2.300','Tarta del día|4.200']],
['Brunch',['Tostada de palta y huevo|6.200','Tostada de ricota y miel|5.200','Huevos revueltos|6.800','Yogurt con granola|4.800','French toast|5.600']],
['Sandwiches',['Jamón y queso|5.200','Pollo y palta|6.500','Tomate y mozzarella|5.800','Vegetariano|5.900']],
['Bebidas',['Chocolate caliente|3.800','Té en hebras|3.200','Matcha latte|4.200','Limonada de menta|3.600','Jugo de naranja|3.800','Iced coffee|3.900']],
['Opciones saludables',['Bowl de frutas y granola|5.200','Yogur con frutos rojos|4.800','Tostada de palta|5.200','Smoothie de banana|4.700']]];
document.getElementById('menu-grid').innerHTML=M.map(function(s){return '<div><h3>'+s[0]+'</h3><ul>'+s[1].map(function(x){var a=x.split('|');return '<li><span>'+a[0]+'</span><b>$'+a[1]+'</b></li>'}).join('')+'</ul></div>'}).join('');
