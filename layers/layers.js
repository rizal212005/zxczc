var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_SWP_1 = new ol.format.GeoJSON();
var features_SWP_1 = format_SWP_1.readFeatures(json_SWP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWP_1.addFeatures(features_SWP_1);
var lyr_SWP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWP_1, 
                style: style_SWP_1,
                popuplayertitle: 'SWP',
                interactive: true,
    title: 'SWP<br />\
    <img src="styles/legend/SWP_1_0.png" /> A.1<br />\
    <img src="styles/legend/SWP_1_1.png" /> A.2<br />\
    <img src="styles/legend/SWP_1_2.png" /> A.3<br />\
    <img src="styles/legend/SWP_1_3.png" /> A.4<br />\
    <img src="styles/legend/SWP_1_4.png" /> A.5<br />\
    <img src="styles/legend/SWP_1_5.png" /> B.1<br />\
    <img src="styles/legend/SWP_1_6.png" /> B.2<br />\
    <img src="styles/legend/SWP_1_7.png" /> B.3<br />\
    <img src="styles/legend/SWP_1_8.png" /> B.4<br />\
    <img src="styles/legend/SWP_1_9.png" /> B.5<br />\
    <img src="styles/legend/SWP_1_10.png" /> C.1<br />\
    <img src="styles/legend/SWP_1_11.png" /> C.2<br />\
    <img src="styles/legend/SWP_1_12.png" /> C.3<br />\
    <img src="styles/legend/SWP_1_13.png" /> <br />' });
var format_Jaringan_IPAL_2 = new ol.format.GeoJSON();
var features_Jaringan_IPAL_2 = format_Jaringan_IPAL_2.readFeatures(json_Jaringan_IPAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_IPAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_IPAL_2.addFeatures(features_Jaringan_IPAL_2);
var lyr_Jaringan_IPAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_IPAL_2, 
                style: style_Jaringan_IPAL_2,
                popuplayertitle: 'Jaringan_IPAL',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_IPAL_2.png" /> Jaringan_IPAL'
            });
var format_Jaringan_Sampah_3 = new ol.format.GeoJSON();
var features_Jaringan_Sampah_3 = format_Jaringan_Sampah_3.readFeatures(json_Jaringan_Sampah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Sampah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Sampah_3.addFeatures(features_Jaringan_Sampah_3);
var lyr_Jaringan_Sampah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Sampah_3, 
                style: style_Jaringan_Sampah_3,
                popuplayertitle: 'Jaringan_Sampah',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Sampah_3.png" /> Jaringan_Sampah'
            });

lyr_Positron_0.setVisible(true);lyr_SWP_1.setVisible(true);lyr_Jaringan_IPAL_2.setVisible(true);lyr_Jaringan_Sampah_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_SWP_1,lyr_Jaringan_IPAL_2,lyr_Jaringan_Sampah_3];
lyr_SWP_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Batas_SWP': 'Batas_SWP', 'Batas_Blok': 'Batas_Blok', });
lyr_Jaringan_IPAL_2.set('fieldAliases', {'id': 'id', });
lyr_Jaringan_Sampah_3.set('fieldAliases', {'id': 'id', });
lyr_SWP_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Batas_SWP': 'TextEdit', 'Batas_Blok': 'TextEdit', });
lyr_Jaringan_IPAL_2.set('fieldImages', {'id': '', });
lyr_Jaringan_Sampah_3.set('fieldImages', {'id': '', });
lyr_SWP_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Batas_SWP': 'inline label - visible with data', 'Batas_Blok': 'inline label - visible with data', });
lyr_Jaringan_IPAL_2.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Jaringan_Sampah_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Jaringan_Sampah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});