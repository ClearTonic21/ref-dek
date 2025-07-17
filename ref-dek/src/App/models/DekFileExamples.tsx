import DekFile from "../components/RefDek/dek-file/DekFile";

function DekFileExamples(name: string = ''): DekFile[] {

  switch(name) {
    case 'ALL':
      return [
        new DekFile(0,  'Mining Truck', '', '', []),
        new DekFile(1,  'Auto Turret', '', '', []),
        new DekFile(2,  'Anti-Armor Pod', '', '', []),
        new DekFile(3,  'Assault Troopers', '', '', []),
        new DekFile(5,  'Decon ATV', '', '', []),
        new DekFile(6,  'Crusader ATV', '', '', []),
        new DekFile(7,  'Shepard Tank', '', '', []),
        new DekFile(8,  'SAM Tank', '', '', []),
        new DekFile(9,  'Spitfire Chopper', '', '', []),
        new DekFile(10, 'Seraphim', '', '', []),
        new DekFile(11, 'Ghosts', '', '', []),
        new DekFile(12, 'Brimstone Artillery', '', '', []),
        new DekFile(13, 'Enabler', '', '', []),
        new DekFile(14, 'Pulsar Tower', '', '', []),
        new DekFile(15, 'Anti-Air Platform', '', '', []),
        new DekFile(16, 'Sentinel', '', '', []),
        new DekFile(17, 'Sentry Bots', '', '', []),
        new DekFile(18, 'Wheel Drones', '', '', []),
        new DekFile(19, 'Keeper Tank', '', '', []),
        new DekFile(20, 'Pulsar Tank', '', '', []),
        new DekFile(21, 'Synergizer', '', '', []),
        new DekFile(22, 'Strafer Jet', '', '', []),
        new DekFile(23, 'Amplifier', '', '', []),
        new DekFile(24, 'Hunter Probe', '', '', []),
        new DekFile(25, 'Pulsar Cruiser', '', '', []),
        new DekFile(26, 'Heavy Destroyer', '', '', []),
        new DekFile(27, 'Phage', '', '', []),
        new DekFile(28, 'Tendril Pod', '', '', []),
        new DekFile(29, 'Reaper Spine', '', '', []),
        new DekFile(30, 'Swarmenvash', '', '', []),
        new DekFile(31, 'Scraper', '', '', []),
        new DekFile(32, 'Tormenvash', '', '', []),
        new DekFile(33, 'Glutton', '', '', []),
        new DekFile(34, 'Necrovash', '', '', []),
        new DekFile(35, 'Harbinger', '', '', []),
        new DekFile(36, 'Screechers', '', '', []),
        new DekFile(37, 'Blight Spitter', '', '', []),
        new DekFile(38, 'Spawn Pit', '', '', []),
        new DekFile(39, 'Nestlings', '', '', []),
        new DekFile(40, 'Slayer', '', '', []),
        new DekFile(41, 'Swarm Queen', '', '', []),
        new DekFile(42, 'Shadow Hive', '', '', []),
        new DekFile(43, 'Hiveling', '', '', []),
        new DekFile(44, 'Titanipede', '', '', []),
      ];
    case 'ZION':
      return [
        new DekFile(0,  'Mining Truck', '', '', []),
        new DekFile(1,  'Auto Turret', '', '', []),
        new DekFile(2,  'Anti-Armor Pod', '', '', []),
        new DekFile(3,  'Assault Troopers', '', '', []),
        new DekFile(5,  'Decon ATV', '', '', []),
        new DekFile(6,  'Crusader ATV', '', '', []),
        new DekFile(7,  'Shepard Tank', '', '', []),
        new DekFile(8,  'SAM Tank', '', '', []),
        new DekFile(9,  'Spitfire Chopper', '', '', []),
        new DekFile(10, 'Seraphim', '', '', []),
        new DekFile(11, 'Ghosts', '', '', []),
        new DekFile(12, 'Brimstone Artillery', '', '', []),
      ];
    case 'ONES':
      return [
        new DekFile(0, 'Enabler', '', '', []),
        new DekFile(1, 'Pulsar Tower', '', '', []),
        new DekFile(2, 'Anti-Air Platform', '', '', []),
        new DekFile(3, 'Sentinel', '', '', []),
        new DekFile(4, 'Sentry Bots', '', '', []),
        new DekFile(5, 'Wheel Drones', '', '', []),
        new DekFile(6, 'Keeper Tank', '', '', []),
        new DekFile(7, 'Pulsar Tank', '', '', []),
        new DekFile(8, 'Synergizer', '', '', []),
        new DekFile(9, 'Strafer Jet', '', '', []),
        new DekFile(10, 'Amplifier', '', '', []),
        new DekFile(11, 'Hunter Probe', '', '', []),
        new DekFile(12, 'Pulsar Cruiser', '', '', []),
        new DekFile(13, 'Heavy Destroyer', '', '', []),
      ];
    case 'SWARM':
      return [
        new DekFile(0, 'Phage', '', '', []),
        new DekFile(1, 'Tendril Pod', '', '', []),
        new DekFile(2, 'Reaper Spine', '', '', []),
        new DekFile(3, 'Swarmenvash', '', '', []),
        new DekFile(4, 'Scraper', '', '', []),
        new DekFile(5, 'Tormenvash', '', '', []),
        new DekFile(6, 'Glutton', '', '', []),
        new DekFile(7, 'Necrovash', '', '', []),
        new DekFile(8, 'Harbinger', '', '', []),
        new DekFile(9, 'Screechers', '', '', []),
        new DekFile(10, 'Blight Spitter', '', '', []),
        new DekFile(11, 'Spawn Pit', '', '', []),
        new DekFile(12, 'Nestlings', '', '', []),
        new DekFile(13, 'Slayer', '', '', []),
        new DekFile(14, 'Swarm Queen', '', '', []),
        new DekFile(15, 'Shadow Hive', '', '', []),
        new DekFile(16, 'Hiveling', '', '', []),
        new DekFile(17, 'Titanipede', '', '', []),
      ];
    default:
      return [new DekFile(0, 'No Dek Files', '', '', [],)];
  }
}

export default DekFileExamples;