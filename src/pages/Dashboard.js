const Dashboard = ({ user }) => {

  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <h3>Hello, {user?.name}</h3>
    </section>
  );
};
export default Dashboard;
