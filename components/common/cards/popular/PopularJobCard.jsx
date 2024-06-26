import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = (item, selectedJob, handleCardPress) => {
  console.log(item.item.employer_name);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.item.employer_logo)
              ? "https://via.placeholder.com/150"
              : item.item.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {" "}
        {item.item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.item.job_title}
        </Text>
        <Text style={styles.location}>{item.item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
