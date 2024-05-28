import React from "react";
import styles from "./nearbyjobcard.style";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = (job, handleNavigate) => {
  console.log(job);
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.job.employer_logo)
              ? "https://via.placeholder.com/150"
              : job.job.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job.job_employment_jobType}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
