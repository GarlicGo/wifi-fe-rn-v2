import React from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import {
  RecordSignState,
  RecordSignStateMapper,
  SignRecord,
  applyLeave,
  resign,
} from "../../../data";

import { styles } from "./styles";
import { usePrompt } from "../../../components";
import { useMutation } from "react-query";
import { toast } from "../../../utils";

interface Props {
  data: SignRecord;
  onApplyResignSuccess?: () => void;
  onApplyLeaveSuccess?: () => void;
}

export const RecordItem: React.FC<Props> = ({
  data,
  onApplyLeaveSuccess,
  onApplyResignSuccess,
}) => {
  const { show: showPrompt } = usePrompt();

  const { mutate: resignMutate } = useMutation(resign, {
    onSuccess() {
      toast("Apply success");
      onApplyResignSuccess?.();
    },
    onError(err) {
      toast(err?.toString() ?? "Failed");
    },
  });

  const { mutate: applyLeaveMutate } = useMutation(applyLeave, {
    onSuccess() {
      toast("Apply success");
      onApplyLeaveSuccess?.();
    },
    onError(err) {
      toast(err?.toString() ?? "Failed");
    },
  });

  const handleResign = () => {
    showPrompt({
      title: "Resign Reason",
      onConfirm(value) {
        console.log("Resign Reason:", value);
        resignMutate({
          recordId: data.recordId,
          reason: value,
        });
      },
    });
  };

  const handleLeave = () => {
    showPrompt({
      title: "Leave Reason",
      onConfirm(value) {
        console.log("Leave Reason:", value);
        applyLeaveMutate({
          recordId: data.recordId,
          reason: value,
        });
      },
    });
  };

  return (
    <View key={data.recordId} style={styles.container}>
      <View style={styles.info}>
        <Text>
          <Text style={styles.infoTitle}>Record Id</Text>: {data.recordId}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>User Name</Text>: {data.userName}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Task Name</Text>: {data.taskName}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Group Name</Text>: {data.groupName}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Place Time</Text>: {data.placeName}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Sign Time</Text>:{" "}
          {data?.signState === RecordSignState.SIGNED ? data.signTime : "-"}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Sign State</Text>:{" "}
          {RecordSignStateMapper[data.signState]}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Resign Reason</Text>:{" "}
          {data.resignReason}
        </Text>
        <Text>
          <Text style={styles.infoTitle}>Leave State</Text>: {data.leaveReason}
        </Text>
      </View>
      <View style={styles.option}>
        <Button type="outline" onPress={handleResign}>
          Resign
        </Button>
        <Button type="outline" onPress={handleLeave}>
          Leave
        </Button>
      </View>
    </View>
  );
};
