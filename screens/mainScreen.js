import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from '../components/taskInput';
import TaskItem from '../components/taskItem';

export default function MainScreen() {
  const [taskList, setTaskList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTask() {
    setModalIsVisible(true);
  }

  function endAddTask() {
    setModalIsVisible(false);
  }

  function deleteTask(id) {
    const newTasks = taskList.filter((one) => one.id !== id);
    setTaskList(newTasks);
    storeDataInStorage(newTasks);
  }

  function addTask(enteredText) {
    const newTasks = [
      ...taskList,
      { text: enteredText, id: Math.random().toString() },
    ];
    setTaskList(newTasks);
    storeDataInStorage(newTasks);
    endAddTask();
  }

  //store data in storage
  const storeDataInStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('tasks', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  // get data from storage
  const getDataFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('tasks');
      if (value !== null) {
        setTaskList(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  // get data from storage in the first render of app
  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/so-white.png')}
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
