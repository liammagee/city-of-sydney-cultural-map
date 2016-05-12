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




area[admin_level=10][boundary=administrative][name=Sydney]->.a;
(
  way(area.a)["amenity"~"arts_centre|cinema|community_centre|nightclub|social_centre|studio|theatre|coworking_space|dojo|internet_cafe|photo_booth|townhall"];
  relation(area.a)["amenity"~"arts_centre|cinema|community_centre|nightclub|social_centre|studio|theatre|coworking_space|dojo|internet_cafe|photo_booth|townhall"];
);

out body;
>;
out skel qt;
