// ============================================================
//  HIER DIE ZEITEN EINTRAGEN
//  Format: "m:ss.mmm"  –  leer lassen ("") = noch keine Zeit
//  Aufbau: Klasse -> Strecke -> Layout -> { stefan, joel }
//  ACHTUNG: Alle aktuellen Zeiten sind nur BEISPIEL-Werte!
// ============================================================
const LAPTIMES = {
  GTP: {
    portimao: {
      gp:            { stefan: "1:31.531", joel: "1:31.648" },
    },
    bahrain: {
      gp:            { stefan: "1:48.836", joel: "1:48.243" },
      endurance:     { stefan: "2:06.047", joel: "2:06.167" },
      outer:         { stefan: "1:10.625", joel: "1:10.901" },
      paddock:       { stefan: "1:16.612", joel: "1:16.761" },
    },
    lemans: {
      gp:            { stefan: "3:27.211", joel: "3:27.731" },
      mulsanne:      { stefan: "3:26.199", joel: "3:27.976" },
    },
    fuji: {
      gp:            { stefan: "1:30.019", joel: "1:29.321" },
      classic:       { stefan: "1:29.655", joel: "1:29.637" },
    },
    monza: {
      gp:            { stefan: "1:37.308", joel: "1:37.263" },
      curvagrande:   { stefan: "1:36.014", joel: "1:35.851" },
    },
    sebring: {
      gp:            { stefan: "1:47.949", joel: "1:47.346" },
      school:        { stefan: "0:57.499", joel: "0:57.535" },
    },
    spa: {
      gp:            { stefan: "2:02.444", joel: "2:03.081" },
      endurance:     { stefan: "2:03.047", joel: "2:03.637" },
    },
    imola: {
      gp:            { stefan: "1:31.662", joel: "1:31.795" },
    },
    interlagos: {
      gp:            { stefan: "1:24.354", joel: "1:24.517" },
    },
    cota: {
      gp:            { stefan: "1:47.869", joel: "1:47.638" },
      national:      { stefan: "1:12.901", joel: "1:12.900" },
    },
    lusail: {
      gp:            { stefan: "1:40.007", joel: "1:39.850" },
      short:         { stefan: "1:07.577", joel: "1:07.507" },
    },
    daytona: {
      gp:            { stefan: "1:36.260", joel: "1:36.008" },
    },
    laguna: {
      gp:            { stefan: "1:16.084", joel: "1:15.753" },
    },
    roadatlanta: {
      gp:            { stefan: "1:11.473", joel: "1:11.082" },
    },
    longbeach: {
      gp:            { stefan: "1:12.077", joel: "1:11.982" },
    },
    silverstone: {
      gp:            { stefan: "1:39.567", joel: "1:39.817" },
      wec:           { stefan: "1:40.654", joel: "1:40.128" },
      national:      { stefan: "0:45.128", joel: "0:44.816" },
      international: { stefan: "0:50.393", joel: "0:50.730" },
    },
    ricard: {
      gp:            { stefan: "1:42.056", joel: "1:41.439" },
      "1a":          { stefan: "1:39.658", joel: "1:39.951" },
      "1av2":        { stefan: "1:41.388", joel: "1:41.141" },
      "1av2short":   { stefan: "1:15.898", joel: "1:16.014" },
      "3a":          { stefan: "1:05.728", joel: "1:05.695" },
    },
  },
  LMP2: {
    portimao: {
      gp:            { stefan: "1:36.044", joel: "1:35.336" },
    },
    bahrain: {
      gp:            { stefan: "1:53.241", joel: "1:53.090" },
      endurance:     { stefan: "2:11.221", joel: "2:12.072" },
      outer:         { stefan: "1:13.755", joel: "1:14.208" },
      paddock:       { stefan: "1:19.570", joel: "1:19.860" },
    },
    lemans: {
      gp:            { stefan: "3:36.844", joel: "3:36.991" },
      mulsanne:      { stefan: "3:37.751", joel: "3:37.319" },
    },
    fuji: {
      gp:            { stefan: "1:33.634", joel: "1:34.284" },
      classic:       { stefan: "1:32.832", joel: "1:33.036" },
    },
    monza: {
      gp:            { stefan: "1:41.929", joel: "1:41.672" },
      curvagrande:   { stefan: "1:40.266", joel: "1:41.335" },
    },
    sebring: {
      gp:            { stefan: "1:52.383", joel: "1:52.444" },
      school:        { stefan: "1:00.506", joel: "1:00.187" },
    },
    spa: {
      gp:            { stefan: "2:08.363", joel: "2:08.021" },
      endurance:     { stefan: "2:08.046", joel: "2:08.802" },
    },
    imola: {
      gp:            { stefan: "1:35.472", joel: "1:35.881" },
    },
    interlagos: {
      gp:            { stefan: "1:28.015", joel: "1:28.101" },
    },
    cota: {
      gp:            { stefan: "1:53.398", joel: "1:52.758" },
      national:      { stefan: "1:15.800", joel: "1:16.063" },
    },
    lusail: {
      gp:            { stefan: "1:43.692", joel: "1:43.656" },
      short:         { stefan: "1:11.118", joel: "1:11.042" },
    },
    daytona: {
      gp:            { stefan: "1:40.544", joel: "1:40.472" },
    },
    laguna: {
      gp:            { stefan: "1:19.482", joel: "1:19.672" },
    },
    roadatlanta: {
      gp:            { stefan: "1:14.112", joel: "1:14.781" },
    },
    longbeach: {
      gp:            { stefan: "1:15.252", joel: "1:15.003" },
    },
    silverstone: {
      gp:            { stefan: "1:44.573", joel: "1:44.176" },
      wec:           { stefan: "1:44.095", joel: "1:45.249" },
      national:      { stefan: "0:46.743", joel: "0:47.004" },
      international: { stefan: "0:52.777", joel: "0:53.135" },
    },
    ricard: {
      gp:            { stefan: "1:46.418", joel: "1:46.034" },
      "1a":          { stefan: "1:44.253", joel: "1:44.933" },
      "1av2":        { stefan: "1:44.826", joel: "1:45.026" },
      "1av2short":   { stefan: "1:19.733", joel: "1:20.011" },
      "3a":          { stefan: "1:09.108", joel: "1:08.833" },
    },
  },
  GTE: {
    portimao: {
      gp:            { stefan: "1:42.163", joel: "1:41.298" },
    },
    bahrain: {
      gp:            { stefan: "1:59.506", joel: "1:59.869" },
      endurance:     { stefan: "2:19.809", joel: "2:19.166" },
      outer:         { stefan: "1:18.385", joel: "1:18.566" },
      paddock:       { stefan: "1:24.981", joel: "1:24.535" },
    },
    lemans: {
      gp:            { stefan: "3:50.743", joel: "3:52.201" },
      mulsanne:      { stefan: "3:51.322", joel: "3:50.434" },
    },
    fuji: {
      gp:            { stefan: "1:39.918", joel: "1:39.791" },
      classic:       { stefan: "1:38.524", joel: "1:38.399" },
    },
    monza: {
      gp:            { stefan: "1:47.194", joel: "1:48.341" },
      curvagrande:   { stefan: "1:47.270", joel: "1:47.604" },
    },
    sebring: {
      gp:            { stefan: "1:59.099", joel: "1:59.978" },
      school:        { stefan: "1:04.047", joel: "1:04.237" },
    },
    spa: {
      gp:            { stefan: "2:16.384", joel: "2:17.493" },
      endurance:     { stefan: "2:15.987", joel: "2:16.754" },
    },
    imola: {
      gp:            { stefan: "1:42.010", joel: "1:42.208" },
    },
    interlagos: {
      gp:            { stefan: "1:33.898", joel: "1:33.860" },
    },
    cota: {
      gp:            { stefan: "2:00.214", joel: "2:00.388" },
      national:      { stefan: "1:20.301", joel: "1:20.621" },
    },
    lusail: {
      gp:            { stefan: "1:51.088", joel: "1:51.049" },
      short:         { stefan: "1:15.101", joel: "1:15.436" },
    },
    daytona: {
      gp:            { stefan: "1:47.583", joel: "1:47.211" },
    },
    laguna: {
      gp:            { stefan: "1:24.311", joel: "1:24.068" },
    },
    roadatlanta: {
      gp:            { stefan: "1:19.086", joel: "1:19.111" },
    },
    longbeach: {
      gp:            { stefan: "1:19.172", joel: "1:19.703" },
    },
    silverstone: {
      gp:            { stefan: "1:51.836", joel: "1:51.685" },
      wec:           { stefan: "1:51.484", joel: "1:51.034" },
      national:      { stefan: "0:49.946", joel: "0:49.854" },
      international: { stefan: "0:56.183", joel: "0:56.450" },
    },
    ricard: {
      gp:            { stefan: "1:52.347", joel: "1:53.244" },
      "1a":          { stefan: "1:50.544", joel: "1:51.302" },
      "1av2":        { stefan: "1:51.896", joel: "1:51.561" },
      "1av2short":   { stefan: "1:24.832", joel: "1:24.629" },
      "3a":          { stefan: "1:13.407", joel: "1:13.674" },
    },
  },
  LMGT3: {
    portimao: {
      gp:            { stefan: "1:44.557", joel: "1:44.251" },
    },
    bahrain: {
      gp:            { stefan: "2:03.695", joel: "2:04.253" },
      endurance:     { stefan: "2:23.799", joel: "2:23.742" },
      outer:         { stefan: "1:21.563", joel: "1:21.325" },
      paddock:       { stefan: "1:27.525", joel: "1:27.995" },
    },
    lemans: {
      gp:            { stefan: "3:57.919", joel: "3:58.883" },
      mulsanne:      { stefan: "3:56.403", joel: "3:57.060" },
    },
    fuji: {
      gp:            { stefan: "1:43.210", joel: "1:43.343" },
      classic:       { stefan: "1:42.531", joel: "1:41.927" },
    },
    monza: {
      gp:            { stefan: "1:51.323", joel: "1:50.970" },
      curvagrande:   { stefan: "1:49.908", joel: "1:50.383" },
    },
    sebring: {
      gp:            { stefan: "2:04.057", joel: "2:04.074" },
      school:        { stefan: "1:06.247", joel: "1:06.436" },
    },
    spa: {
      gp:            { stefan: "2:20.614", joel: "2:20.432" },
      endurance:     { stefan: "2:20.906", joel: "2:20.611" },
    },
    imola: {
      gp:            { stefan: "1:44.572", joel: "1:44.822" },
    },
    interlagos: {
      gp:            { stefan: "1:36.730", joel: "1:36.578" },
    },
    cota: {
      gp:            { stefan: "2:03.300", joel: "2:04.072" },
      national:      { stefan: "1:23.457", joel: "1:22.932" },
    },
    lusail: {
      gp:            { stefan: "1:53.467", joel: "1:53.408" },
      short:         { stefan: "1:17.891", joel: "1:17.122" },
    },
    daytona: {
      gp:            { stefan: "1:50.771", joel: "1:50.589" },
    },
    laguna: {
      gp:            { stefan: "1:26.642", joel: "1:27.142" },
    },
    roadatlanta: {
      gp:            { stefan: "1:21.032", joel: "1:21.145" },
    },
    longbeach: {
      gp:            { stefan: "1:22.035", joel: "1:21.614" },
    },
    silverstone: {
      gp:            { stefan: "1:55.138", joel: "1:54.328" },
      wec:           { stefan: "1:54.196", joel: "1:54.068" },
      national:      { stefan: "0:51.456", joel: "0:51.344" },
      international: { stefan: "0:58.086", joel: "0:58.103" },
    },
    ricard: {
      gp:            { stefan: "1:56.894", joel: "1:57.104" },
      "1a":          { stefan: "1:54.925", joel: "1:54.262" },
      "1av2":        { stefan: "1:55.416", joel: "1:55.008" },
      "1av2short":   { stefan: "1:26.791", joel: "1:27.272" },
      "3a":          { stefan: "1:15.811", joel: "1:15.329" },
    },
  },
  LMP3: {
    portimao: {
      gp:            { stefan: "1:43.208", joel: "1:43.299" },
    },
    bahrain: {
      gp:            { stefan: "2:02.653", joel: "2:02.395" },
      endurance:     { stefan: "2:22.615", joel: "2:22.856" },
      outer:         { stefan: "1:20.005", joel: "1:20.386" },
      paddock:       { stefan: "1:26.857", joel: "1:26.012" },
    },
    lemans: {
      gp:            { stefan: "3:56.502", joel: "3:55.912" },
      mulsanne:      { stefan: "3:53.114", joel: "3:54.018" },
    },
    fuji: {
      gp:            { stefan: "1:41.639", joel: "1:41.984" },
      classic:       { stefan: "1:40.583", joel: "1:40.814" },
    },
    monza: {
      gp:            { stefan: "1:50.253", joel: "1:50.145" },
      curvagrande:   { stefan: "1:49.519", joel: "1:48.894" },
    },
    sebring: {
      gp:            { stefan: "2:02.162", joel: "2:01.512" },
      school:        { stefan: "1:05.388", joel: "1:05.463" },
    },
    spa: {
      gp:            { stefan: "2:19.377", joel: "2:19.503" },
      endurance:     { stefan: "2:18.666", joel: "2:19.806" },
    },
    imola: {
      gp:            { stefan: "1:44.148", joel: "1:44.144" },
    },
    interlagos: {
      gp:            { stefan: "1:35.362", joel: "1:35.651" },
    },
    cota: {
      gp:            { stefan: "2:01.692", joel: "2:02.550" },
      national:      { stefan: "1:22.240", joel: "1:21.744" },
    },
    lusail: {
      gp:            { stefan: "1:51.991", joel: "1:52.472" },
      short:         { stefan: "1:16.576", joel: "1:16.775" },
    },
    daytona: {
      gp:            { stefan: "1:49.032", joel: "1:48.435" },
    },
    laguna: {
      gp:            { stefan: "1:26.019", joel: "1:25.257" },
    },
    roadatlanta: {
      gp:            { stefan: "1:20.719", joel: "1:20.118" },
    },
    longbeach: {
      gp:            { stefan: "1:20.845", joel: "1:21.282" },
    },
    silverstone: {
      gp:            { stefan: "1:52.699", joel: "1:52.711" },
      wec:           { stefan: "1:53.207", joel: "1:53.487" },
      national:      { stefan: "0:50.909", joel: "0:50.818" },
      international: { stefan: "0:57.540", joel: "0:57.231" },
    },
    ricard: {
      gp:            { stefan: "1:55.557", joel: "1:54.374" },
      "1a":          { stefan: "1:52.795", joel: "1:53.207" },
      "1av2":        { stefan: "1:53.653", joel: "1:54.249" },
      "1av2short":   { stefan: "1:26.300", joel: "1:26.180" },
      "3a":          { stefan: "1:14.933", joel: "1:14.681" },
    },
  },
};
