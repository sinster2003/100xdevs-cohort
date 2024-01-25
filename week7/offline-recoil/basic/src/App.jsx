import { useMemo } from 'react'
import { backendAsyncAtom, jobsAtom, messagingAtom, networkAtom, notificationsAtom, todoAtomsFamily, totalCountSelector } from './store/atoms';
import { useRecoilValue, useSetRecoilState } from "recoil";

const App = () => {
  const networkCount = useRecoilValue(networkAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const totalCount = useRecoilValue(totalCountSelector);

  const objectBackendCount = useRecoilValue(backendAsyncAtom);
  /*
  const totalCount = useMemo(() => {
    return networkCount + messagingCount + notificationsCount + jobsCount;
  }, [networkCount, messagingCount, notificationsCount, jobsCount]);
  */
  return (
    <div>
      <button>Home</button>
      {/*
      <button>My Networks {networkCount >= 100 ? "99+" : networkCount}</button>
      <button>Messages {messagingCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Notifications {notificationsCount}</button>
      */}

      <button>My Networks {objectBackendCount.network >= 100 ? "99+" : networkCount}</button>
      <button>Messages {objectBackendCount.messaging}</button>
      <button>Jobs {objectBackendCount.jobs}</button>
      <button>Notifications {objectBackendCount.notifications}</button>

      <button>Me ({totalCount})</button>
      <ButtonUpdater/>

      <Todo id={1}/>
      <Todo id={3}/>
      <Todo id={2}/>
    </div>
  )
}

const ButtonUpdater = () => {

  const setMessagingCount = useSetRecoilState(messagingAtom);

  return(
    <button onClick={() => {
      setMessagingCount(prevCount => prevCount + 1);
    }}>Click</button>
  );
}

const Todo = ({id}) => {
  const todosFamily = useRecoilValue(todoAtomsFamily(id));
  return(
    <>
      <p>{todosFamily.title}</p>
    </>
  ); 
} 

export default App