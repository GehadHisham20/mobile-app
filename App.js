import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';
import TaskInput from './components/taskInput';
import TaskItem from './components/taskItem';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTask() {
    setModalIsVisible(true);
  }

  function endAddTask() {
    setModalIsVisible(false);
  }

  function deleteTask(id) {
    setTaskList((prev) => {
      return prev.filter((one) => one.id !== id);
    });
  }

  function addTask(enteredText) {
    setTaskList((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddTask();
  }

  return (
    <ImageBackground
      source={require('./assets/so-white.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.appContainer}>
        <TaskInput addTask={addTask} />
        <View style={styles.tasksContainer}>
          {/* using scroll view */}
          {/* <ScrollView>
          {taskList.length > 0 ? (
            //wrap the text by view as in ios the border raduis not applied to text
            taskList.map((task, index) => {
              return (
                <View style={styles.taskItem} key={index}>
                  <Text style={styles.taskText}>{task}</Text>
                </View>
              );
            })
          ) : (
            <Text>List of Tasks...</Text>
          )}
        </ScrollView> */}

          {/* using flatList */}

          <FlatList
            data={taskList}
            renderItem={({ item }) => (
              <TaskItem
                text={item.text}
                deleteTask={() => deleteTask(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            // extraData={selectedId}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tasksContainer: {
    flex: 5,
  },
});
