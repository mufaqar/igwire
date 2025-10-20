import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  location: string;
  time: string;
  avatar: string;
}

interface TeamCardProps {
  members?: TeamMember[];
  limit?: number;
}

const defaultMembers: TeamMember[] = [
  {
    id: 1,
    name: "Marija Djenic",
    position: "Specialist",
    location: "London, British ",
    time: "9:55pm",
    avatar: "/images/card-img.jpg"
  },
  {
    id: 2,
    name: "Marija Djenic",
    position: "Specialist",
    location: "London, British ",
    time: "9:55pm",
    avatar: "/images/card-img.jpg"
  },
  {
    id: 3,
    name: "Marija Djenic",
    position: "Specialist",
    location: "London, British ",
    time: "9:55pm",
    avatar: "/images/card-img.jpg"
  },

];

function TeamCard({ members = defaultMembers, limit = 3 }: TeamCardProps) {
  const displayedMembers = members.slice(0, limit);

  return (
    <section className='container'>
      <div className="wraper">
        {displayedMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-content">
              <div className="team-avatar">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <div className="team-loc-time">
                  <span className="team-location">{member.location}</span>
                  <span className="team-time">{member.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamCard;