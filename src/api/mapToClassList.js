import _ from 'lodash';
import * as subscriptionTypes from '../constants/subscriptionTypes';

export default (data) => {
  return data.map(student => {
    let stud = Object.assign(student, {
      name: student.firstname + ' ' + student.lastname,
      subscription_type: mapToSubscriptionType(student.subscriptiontype),
      password_hint: mapToPasswordHint(student.passwordLearningPlatformHint, student.passwordHint),
      parent_contact: student.parent.cell,
      parent_name: student.parent.firstName + " " + student.parent.lastName,
      usernames_platform: student.login
    });
    return stud;
  });
};

function mapToSubscriptionType(type) {
  if (type == "Subscription") {
    return subscriptionTypes.SUBSCRIPTION;
  }

  if (type == "Trial") {
    return subscriptionTypes.TRIAL;
  }

  return null;
}

let categoryMap = {
  grandparent_name_plus_number: "Naam grootouder + huisnummer",
  pet_name_plus_number: "naam huisdier + huisnummer",
  best_friend_name_plus_number: "naam beste vriend of vriendin + huisnummer",
  sibling_name_plus_number: "naam broer of zus + huisnummer",
  residence_city_name_plus_number: "naam stad waar je woont + huisnummer"
};

function mapToPasswordHint(category, hint) {
  if (category == "other") {
    if (hint.includes("tijdelijke_wachtwoord")) {
      return "Wachtwoord is CFR17!";
    }
    return hint;
  } else {
    return categoryMap[category];
  }
}
