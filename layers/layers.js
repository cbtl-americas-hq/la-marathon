var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OneMileAreaofInfluence_1 = new ol.format.GeoJSON();
var features_OneMileAreaofInfluence_1 = format_OneMileAreaofInfluence_1.readFeatures(json_OneMileAreaofInfluence_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OneMileAreaofInfluence_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OneMileAreaofInfluence_1.addFeatures(features_OneMileAreaofInfluence_1);
var lyr_OneMileAreaofInfluence_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OneMileAreaofInfluence_1, 
                style: style_OneMileAreaofInfluence_1,
                popuplayertitle: 'One-Mile Area of Influence',
                interactive: true,
                title: '<img src="styles/legend/OneMileAreaofInfluence_1.png" /> One-Mile Area of Influence'
            });
var format_Course_2 = new ol.format.GeoJSON();
var features_Course_2 = format_Course_2.readFeatures(json_Course_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Course_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Course_2.addFeatures(features_Course_2);
var lyr_Course_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Course_2, 
                style: style_Course_2,
                popuplayertitle: 'Course',
                interactive: true,
                title: '<img src="styles/legend/Course_2.png" /> Course'
            });
var format_CourseEntertainment_3 = new ol.format.GeoJSON();
var features_CourseEntertainment_3 = format_CourseEntertainment_3.readFeatures(json_CourseEntertainment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CourseEntertainment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CourseEntertainment_3.addFeatures(features_CourseEntertainment_3);
var lyr_CourseEntertainment_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CourseEntertainment_3, 
                style: style_CourseEntertainment_3,
                popuplayertitle: 'Course Entertainment',
                interactive: true,
                title: '<img src="styles/legend/CourseEntertainment_3.png" /> Course Entertainment'
            });
var format_Cafes_4 = new ol.format.GeoJSON();
var features_Cafes_4 = format_Cafes_4.readFeatures(json_Cafes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafes_4.addFeatures(features_Cafes_4);
var lyr_Cafes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cafes_4, 
                style: style_Cafes_4,
                popuplayertitle: 'Cafes',
                interactive: true,
    title: 'Cafes<br />\
    <img src="styles/legend/Cafes_4_0.png" /> Non-Trad<br />\
    <img src="styles/legend/Cafes_4_1.png" /> Non-Trad Along Route<br />\
    <img src="styles/legend/Cafes_4_2.png" /> Trad<br />\
    <img src="styles/legend/Cafes_4_3.png" /> Trad Along Route<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OneMileAreaofInfluence_1.setVisible(true);lyr_Course_2.setVisible(true);lyr_CourseEntertainment_3.setVisible(true);lyr_Cafes_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OneMileAreaofInfluence_1,lyr_Course_2,lyr_CourseEntertainment_3,lyr_Cafes_4];
lyr_OneMileAreaofInfluence_1.set('fieldAliases', {'id': 'id', 'route': 'route', 'ringId': 'ringId', 'distance': 'distance', });
lyr_Course_2.set('fieldAliases', {'id': 'id', 'route': 'route', });
lyr_CourseEntertainment_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Cafes_4.set('fieldAliases', {'store_id': 'store_id', 'id': 'id', 'store_name': 'store_name', 'desc': 'desc', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', 'last_modif': 'last_modif', 'last_mod_1': 'last_mod_1', 'Category': 'Category', });
lyr_OneMileAreaofInfluence_1.set('fieldImages', {'id': 'TextEdit', 'route': 'TextEdit', 'ringId': 'TextEdit', 'distance': 'TextEdit', });
lyr_Course_2.set('fieldImages', {'id': 'TextEdit', 'route': 'TextEdit', });
lyr_CourseEntertainment_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Cafes_4.set('fieldImages', {'store_id': 'TextEdit', 'id': 'TextEdit', 'store_name': 'TextEdit', 'desc': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', 'last_modif': 'TextEdit', 'last_mod_1': 'TextEdit', 'Category': 'TextEdit', });
lyr_OneMileAreaofInfluence_1.set('fieldLabels', {'id': 'hidden field', 'route': 'hidden field', 'ringId': 'header label - always visible', 'distance': 'hidden field', });
lyr_Course_2.set('fieldLabels', {'id': 'hidden field', 'route': 'hidden field', });
lyr_CourseEntertainment_3.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', });
lyr_Cafes_4.set('fieldLabels', {'store_id': 'inline label - visible with data', 'id': 'hidden field', 'store_name': 'inline label - always visible', 'desc': 'hidden field', 'sqft': 'hidden field', 'store_type': 'hidden field', 'trad_nontr': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'operations': 'hidden field', 'last_modif': 'hidden field', 'last_mod_1': 'hidden field', 'Category': 'inline label - always visible', });
lyr_Cafes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});