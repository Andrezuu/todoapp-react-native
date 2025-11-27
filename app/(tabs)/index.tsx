import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Task {
  id: string
  title: string
}


export default function HomeScreen() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    ([...tasks, { id: Date.now().toString(), title: task }]);
    setTask('');
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity onPress={() => removeTask(item.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
  // return (
  //   <ParallaxScrollView
  //     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
  //     headerImage={
  //       <Image
  //         source={require('@/assets/images/partial-react-logo.png')}
  //         style={styles.reactLogo}
  //       />
  //     }>
  //     <ThemedView style={styles.titleContainer}>
  //       <ThemedText type="title">Welcome!</ThemedText>
  //       <HelloWave />
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 1: Try it</ThemedText>
  //       <ThemedText>
  //         Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
  //         Press{' '}
  //         <ThemedText type="defaultSemiBold">
  //           {Platform.select({
  //             ios: 'cmd + d',
  //             android: 'cmd + m',
  //             web: 'F12',
  //           })}
  //         </ThemedText>{' '}
  //         to open developer tools.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <Link href="/modal">
  //         <Link.Trigger>
  //           <ThemedText type="subtitle">Step 2: Explore</ThemedText>
  //         </Link.Trigger>
  //         <Link.Preview />
  //         <Link.Menu>
  //           <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
  //           <Link.MenuAction
  //             title="Share"
  //             icon="square.and.arrow.up"
  //             onPress={() => alert('Share pressed')}
  //           />
  //           <Link.Menu title="More" icon="ellipsis">
  //             <Link.MenuAction
  //               title="Delete"
  //               icon="trash"
  //               destructive
  //               onPress={() => alert('Delete pressed')}
  //             />
  //           </Link.Menu>
  //         </Link.Menu>
  //       </Link>
  //
  //       <ThemedText>
  //         {`Tap the Explore tab to learn more about what's included in this starter app.`}
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
  //       <ThemedText>
  //         {`When you're ready, run `}
  //         <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
  //         <ThemedText type="defaultSemiBold">app-example</ThemedText>.
  //       </ThemedText>
  //     </ThemedView>
  //   </ParallaxScrollView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    marginBottom: 10
  },
  itemText: {
    fontSize: 16
  },
  delete: {
    color: 'red'
  }
})
