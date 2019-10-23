class AnimalPermissionService {
  static Scopes = {
    Door: {
      open: "Door.open"
    }
  };

  constructor() {
    this.animals = [];
  }

  hasPermission(animal, permission) {

  }
}

class Permission {
  constructor(scope, door) {
    this.scope = scope;
    this.door = door;
  }
}

class AnimalIdentityService {
  constructor(grandmother, granddaughter) {
    this.grandmotherFeatures = Object.assign(grandmother.features);
    this.granddaughterFeatures = Object.assign(granddaughter.features);
  }

  isGranddaughter(animal) {
    return true;
  }

  isGrandmother(animal) {
    let trust = 100;
    Object.keys(animal.features).forEach((featureName) => {
      if (animal.features[featureName].size !== this.grandmotherFeatures[featureName].size) {
        let explanation = animal.getExplanation(featureName);
        if (explanation) {
          trust -= 20;
        } else {
          trust -= 100;
        }
      }
    });

    return trust > 0;
  }
}