# tfk-seneca-skoleskyss-walking-distance
Calculates walking distance to a given school

```curl -d '{"role": "distance", "cmd":"measure", "origin": "59.5624081592,9.2847034557", "destination": "59.55564,9.25747"}' -v http://localhost:8000/act```

Supports waypoints

```curl -d '{"role": "distance", "cmd":"measure", "origin": "59.5624081592,9.2847034557", "destination": "59.55564,9.25747", "waypoints":["59.5652233,9.2818646"]}' -v http://localhost:8000/act```
