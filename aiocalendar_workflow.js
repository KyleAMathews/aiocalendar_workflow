eventPreview = function(nid) {
  //console.log(nid);
  
  url = "event_json/" + nid;
  
  $.ajax({
    url: url,
    async: false,
    dataType: 'json',
    success: function (data)  {
      node = data.nodes[0];
      
      dat = {};
      
      dat.title = node.node_title;
      dat.time = node.node_data_field_event_date_field_event_date;
      dat.location = node.node_data_field_event_image_field_event_location;
      dat.paragraph = node.node_revisions_body;
      
      imgSrc = node.node_data_field_event_image_field_event_image_imceimage_path;
      imgWid = node.node_data_field_event_image_field_event_image_imceimage_width;
      imgHei = node.node_data_field_event_image_field_event_image_imceimage_height;
      imgAlt = node.node_data_field_event_image_field_event_image_imceimage_alt;
      if (typeof(imgSrc) != "undefined") {
        dat.image = "<img class='event-tooltip-image' src=\"" + imgSrc + "\" width='" + imgWid + "' height='" + imgHei + "' alt='" + imgAlt + "' />";  
      }
      
      //console.log(dat);
      
      html = themeToolTips(dat);
      
      //console.log(html);
      
    }
  });
  
  
  
  return html;
}

Drupal.behaviors.eventPreview = function(context) {
  $(".view-workflows .views-field-nid [@ref]").bt({
    contentSelector: "eventPreview($(this).attr('ref'))",
    fill: 'rgba(222, 240, 252, .85)',
    cssStyles: {color: 'black', fontWeight: 'bold'},
    shrinkToFit: true,
    padding: 20,
    cornerRadius: 20,
    spikeLength: 15,
    spikeGirth: 25,
    width: 500,
    positions: ['left', 'right', 'bottom', 'top']
  });
}