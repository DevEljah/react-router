const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <h5>Hi {user?.name}</h5>
    </section>
  );
};
export default Dashboard;
