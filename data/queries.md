/*
This shows the cycleway and cycleroute network.
*/

[out:json];

(
  node[amenity=arts_centre]({{bbox}});
  relation[amenity=arts_centre]({{bbox}});
  way[amenity=arts_centre]({{bbox}});
);

out body;
>;
out skel qt;


area[boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"arts_centre|cinema"];
  relation(area.a)["amenity"~"arts_centre|cinema"];
);

out body;
>;
out skel qt;



(
  way({{bbox}})[boundary=administrative][name=Sydney];
  relation({{bbox}})[boundary=administrative][name=Sydney];
);

out body;
>;
out skel qt;




// Performance and Exhibition

area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"bar|bbq|biergarten|cafe|fast_food|food_court|ice_cream|pub|restaurant|college|library|public_bookcase|school|music_school|language_school|university|arts_centre|cinema|community_centre|nightclub|social_centre|studio|theatre|coworking_space|dojo|internet_cafe|photo_booth|place_of_worship|townhall"];
  relation(area.a)["amenity"~"bar|bbq|biergarten|cafe|fast_food|food_court|ice_cream|pub|restaurant|college|library|public_bookcase|school|music_school|language_school|university|arts_centre|cinema|community_centre|nightclub|social_centre|studio|theatre|coworking_space|dojo|internet_cafe|photo_booth|place_of_worship|townhall"];
);
out body;
>;
out skel qt;

// Buildings

area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["building"~"commercial|cathedral|chapel|church|mosque|temple|synagogue|shrine|university"];
  relation(area.a)["building"~"commercial|cathedral|chapel|church|mosque|temple|synagogue|shrine|university"];
);
out body;
>;
out skel qt;



// Historic

area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["historic"~".*"];
  relation(area.a)["historic"~".*"];
);
out body;
>;
out skel qt;

// Landuse

area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["landuse"~".*"];
  relation(area.a)["landuse"~".*"];
);
out body;
>;
out skel qt;


// Leisure

area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["leisure"~".*"];
  relation(area.a)["leisure"~".*"];
);
out body;
>;
out skel qt;


// Tourism

area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["tourism"~".*"];
  relation(area.a)["tourism"~".*"];
);
out body;
>;
out skel qt;

// Performance and Exhibition
area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"bar|biergarten|cafe|pub|restaurant|college|library|public_bookcase|school|university|arts_centre|cinema|community_centre|nightclub|social_centre|studio|theatre|place_of_worship|townhall"];
  relation(area.a)["amenity"~"bar|biergarten|cafe|pub|restaurant|college|library|public_bookcase|school|university|arts_centre|cinema|community_centre|nightclub|social_centre|studio|theatre|place_of_worship|townhall"];
);
out body;
>;
out skel qt;

// Festivals and Public Space
area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["leisure"~".*"];
  relation(area.a)["leisure"~".*"];
);
out body;
>;
out skel qt;

// Commercial and Enterprise
area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["shop"~"bags|boutique|clothes|fabric|fashion|jewelry|leather|shoes|charity|second_hand|antiques|furniture|interior_decoration|art|craft|games|model|music|musical_instrument|photo|video|video_games|anime|books"];
  relation(area.a)["shop"~"bags|boutique|clothes|fabric|fashion|jewelry|leather|shoes|charity|second_hand|antiques|furniture|interior_decoration|art|craft|games|model|music|musical_instrument|photo|video|video_games|anime|books"];
);
out body;
>;
out skel qt;

// Practice, Education and Development
area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"college|school|music_school|language_school|university |studio"];
  relation(area.a)["amenity"~"college|school|music_school|language_school|university |studio"];
);
out body;
>;
out skel qt;

// Community and Participation
area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"coworking_space|college|library|public_bookcase|arts_centre|community_centre|social_centre"];
  relation(area.a)["amenity"~"coworking_space|college|library|public_bookcase|arts_centre|community_centre|social_centre"];
);
out body;
>;
out skel qt;

// Digital Space
area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"internet_cafe|photo_booth"];
  relation(area.a)["amenity"~"internet_cafe|photo_booth"];
);
out body;
>;
out skel qt;


area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)[amenity"~".*"];
  relation(area.a)["amenity"~".*"];
);
out body;
>;
out skel qt;
