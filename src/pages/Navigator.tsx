import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props{
  to: string;
}

export default function Navigator({ to }: Props) {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [])
  return <div>redirect to {to}</div>
}
