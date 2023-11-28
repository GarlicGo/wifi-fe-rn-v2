import { NativeScrollEvent, ScrollView, Text, View } from "react-native";
import { useInfiniteQuery } from "react-query";
import { getMySignRecordList } from "../../data";
import { toast } from "../../utils";
import { Button } from "@rneui/themed";
import { RecordItem } from "./RecordItem";
import { styles } from "./styles";

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 20; // 你可以根据需要调整这个值
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export default function History() {
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfiniteQuery(
      "mySignRecords",
      ({ pageParam }) => {
        return getMySignRecordList({
          current: pageParam,
        });
      },
      {
        getNextPageParam: (lastPage) => {
          return lastPage.next !== -1 ? lastPage.next : undefined;
        },
        onError(err) {
          console.log("mySignRecords err", err);
          toast(err?.toString() ?? "Failed");
        },
      }
    );

  const recordList = (
    data?.pages?.map((page) => page?.list ?? []) ?? []
  ).flat();

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent) && hasNextPage) {
          fetchNextPage();
        }
      }}
      scrollEventThrottle={400}
      style={styles.container}
    >
      <View style={styles.headerInfo}>
        <Text style={styles.headerInfoText}>
          All records number: {data?.pages?.[0]?.total ?? 0}
        </Text>
      </View>
      {recordList?.map((record) => (
        <RecordItem
          key={record.recordId}
          data={record}
          onApplyLeaveSuccess={refetch}
          onApplyResignSuccess={refetch}
        />
      ))}
      <Button title="Refresh" onPress={() => refetch()} />
      <Button
        disabled={!hasNextPage || isLoading}
        title={
          isLoading
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"
        }
        type="outline"
        onPress={() => fetchNextPage()}
      />
    </ScrollView>
  );
}
