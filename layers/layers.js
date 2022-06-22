var wms_layers = [];

var format_Quercussuber_0 = new ol.format.GeoJSON();
var features_Quercussuber_0 = format_Quercussuber_0.readFeatures(json_Quercussuber_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quercussuber_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quercussuber_0.addFeatures(features_Quercussuber_0);
var lyr_Quercussuber_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quercussuber_0, 
                style: style_Quercussuber_0,
                interactive: true,
                title: '<img src="styles/legend/Quercussuber_0.png" /> Quercus suber'
            });

        var lyr_EsriTopographic_1 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Quercusrotundifolia_2 = new ol.format.GeoJSON();
var features_Quercusrotundifolia_2 = format_Quercusrotundifolia_2.readFeatures(json_Quercusrotundifolia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quercusrotundifolia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quercusrotundifolia_2.addFeatures(features_Quercusrotundifolia_2);
var lyr_Quercusrotundifolia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Quercusrotundifolia_2, 
                style: style_Quercusrotundifolia_2,
                interactive: true,
                title: '<img src="styles/legend/Quercusrotundifolia_2.png" /> Quercus rotundifolia'
            });
var format_Castaneasativa_3 = new ol.format.GeoJSON();
var features_Castaneasativa_3 = format_Castaneasativa_3.readFeatures(json_Castaneasativa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Castaneasativa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Castaneasativa_3.addFeatures(features_Castaneasativa_3);
var lyr_Castaneasativa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Castaneasativa_3, 
                style: style_Castaneasativa_3,
                interactive: true,
                title: '<img src="styles/legend/Castaneasativa_3.png" /> Castanea sativa'
            });
var format_Fraxinusangustifolia_4 = new ol.format.GeoJSON();
var features_Fraxinusangustifolia_4 = format_Fraxinusangustifolia_4.readFeatures(json_Fraxinusangustifolia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fraxinusangustifolia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fraxinusangustifolia_4.addFeatures(features_Fraxinusangustifolia_4);
var lyr_Fraxinusangustifolia_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fraxinusangustifolia_4, 
                style: style_Fraxinusangustifolia_4,
                interactive: true,
                title: '<img src="styles/legend/Fraxinusangustifolia_4.png" /> Fraxinus angustifolia'
            });

lyr_Quercussuber_0.setVisible(true);lyr_EsriTopographic_1.setVisible(true);lyr_Quercusrotundifolia_2.setVisible(true);lyr_Castaneasativa_3.setVisible(true);lyr_Fraxinusangustifolia_4.setVisible(true);
var layersList = [lyr_Quercussuber_0,lyr_EsriTopographic_1,lyr_Quercusrotundifolia_2,lyr_Castaneasativa_3,lyr_Fraxinusangustifolia_4];
lyr_Quercussuber_0.set('fieldAliases', {'Nome': 'Nome', 'Localidade': 'Localidade', 'Data med.': 'Data med.', 'Espécie': 'Espécie', 'Perímetro': 'Perímetro', 'Altura (m)': 'Altura (m)', 'Altura cru': 'Altura cru', 'GPS (Y)': 'GPS (Y)', 'GPS (X)': 'GPS (X)', 'icon_url': 'icon_url', });
lyr_Quercusrotundifolia_2.set('fieldAliases', {'Nome': 'Nome', 'Localidade': 'Localidade', 'Data med.': 'Data med.', 'Espécie': 'Espécie', 'Perímetro': 'Perímetro', 'Altura (m)': 'Altura (m)', 'Altura cru': 'Altura cru', 'GPS (Y)': 'GPS (Y)', 'GPS (X)': 'GPS (X)', 'icon_url': 'icon_url', });
lyr_Castaneasativa_3.set('fieldAliases', {'Nome': 'Nome', 'Localidade': 'Localidade', 'Data med.': 'Data med.', 'Espécie': 'Espécie', 'Perímetro': 'Perímetro', 'Altura (m)': 'Altura (m)', 'Altura cru': 'Altura cru', 'GPS (Y)': 'GPS (Y)', 'GPS (X)': 'GPS (X)', 'icon_url': 'icon_url', });
lyr_Fraxinusangustifolia_4.set('fieldAliases', {'Nome': 'Nome', 'Localidade': 'Localidade', 'Data med.': 'Data med.', 'Espécie': 'Espécie', 'Perímetro': 'Perímetro', 'Altura (m)': 'Altura (m)', 'Altura cru': 'Altura cru', 'GPS (Y)': 'GPS (Y)', 'GPS (X)': 'GPS (X)', 'icon_url': 'icon_url', });
lyr_Quercussuber_0.set('fieldImages', {'Nome': 'TextEdit', 'Localidade': 'TextEdit', 'Data med.': 'TextEdit', 'Espécie': 'TextEdit', 'Perímetro': 'TextEdit', 'Altura (m)': 'TextEdit', 'Altura cru': 'TextEdit', 'GPS (Y)': 'TextEdit', 'GPS (X)': 'TextEdit', 'icon_url': 'TextEdit', });
lyr_Quercusrotundifolia_2.set('fieldImages', {'Nome': 'TextEdit', 'Localidade': 'TextEdit', 'Data med.': 'TextEdit', 'Espécie': 'TextEdit', 'Perímetro': 'TextEdit', 'Altura (m)': 'TextEdit', 'Altura cru': 'TextEdit', 'GPS (Y)': 'TextEdit', 'GPS (X)': 'TextEdit', 'icon_url': 'TextEdit', });
lyr_Castaneasativa_3.set('fieldImages', {'Nome': 'TextEdit', 'Localidade': 'TextEdit', 'Data med.': 'TextEdit', 'Espécie': 'TextEdit', 'Perímetro': 'TextEdit', 'Altura (m)': 'TextEdit', 'Altura cru': 'TextEdit', 'GPS (Y)': 'TextEdit', 'GPS (X)': 'TextEdit', 'icon_url': 'TextEdit', });
lyr_Fraxinusangustifolia_4.set('fieldImages', {'Nome': 'TextEdit', 'Localidade': 'TextEdit', 'Data med.': 'TextEdit', 'Espécie': 'TextEdit', 'Perímetro': 'TextEdit', 'Altura (m)': 'TextEdit', 'Altura cru': 'TextEdit', 'GPS (Y)': 'TextEdit', 'GPS (X)': 'TextEdit', 'icon_url': 'TextEdit', });
lyr_Quercussuber_0.set('fieldLabels', {'Nome': 'no label', 'Localidade': 'inline label', 'Data med.': 'inline label', 'Espécie': 'header label', 'Perímetro': 'inline label', 'Altura (m)': 'inline label', 'Altura cru': 'inline label', 'GPS (Y)': 'no label', 'GPS (X)': 'no label', 'icon_url': 'no label', });
lyr_Quercusrotundifolia_2.set('fieldLabels', {'Nome': 'no label', 'Localidade': 'inline label', 'Data med.': 'inline label', 'Espécie': 'header label', 'Perímetro': 'inline label', 'Altura (m)': 'inline label', 'Altura cru': 'inline label', 'GPS (Y)': 'no label', 'GPS (X)': 'no label', 'icon_url': 'no label', });
lyr_Castaneasativa_3.set('fieldLabels', {'Nome': 'no label', 'Localidade': 'inline label', 'Data med.': 'inline label', 'Espécie': 'header label', 'Perímetro': 'inline label', 'Altura (m)': 'inline label', 'Altura cru': 'inline label', 'GPS (Y)': 'no label', 'GPS (X)': 'no label', 'icon_url': 'no label', });
lyr_Fraxinusangustifolia_4.set('fieldLabels', {'Nome': 'no label', 'Localidade': 'inline label', 'Data med.': 'inline label', 'Espécie': 'header label', 'Perímetro': 'inline label', 'Altura (m)': 'no label', 'Altura cru': 'inline label', 'GPS (Y)': 'no label', 'GPS (X)': 'no label', 'icon_url': 'no label', });
lyr_Fraxinusangustifolia_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});